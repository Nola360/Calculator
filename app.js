// Targeting Variables
const buttons = document.querySelectorAll('.btn');
const screen = document.querySelector('.screen');
const equalButton = document.querySelector('.equal');
const clearButton = document.querySelector('.clear');

//Create a loop
// buttons.forEach(button => button.addEventListener('click', keys));

// Loop statment for numbers
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function () {
    let number = buttons[i].getAttribute('data-number');
    screen.value += number;
  })
}

// Equal button function
equalButton.addEventListener('click', function () {

  if (screen.value === '') {
    alert('input is empty')
  } else {

    let value = eval(screen.value)
    screen.value = value
  }
})

clearButton.addEventListener('click', function () {
  screen.value = '';
})