//Реализовать функцию, которая будет производить математические операции с введеными пользователем числами.

//Технические требования:

//Считать с помощью модального окна браузера два числа.
//Считать с помощью модального окна браузера математическую операцию, которую нужно совершить.
//Сюда может быть введено +, -, *, /.
//Создать функцию, в которую передать два значения и операцию.
//Вывести в консоль результат выполнения функции.

const firstNumber = +prompt("Eneter first number?");
const mathOperator = prompt("What do you want to do with the number?");
const secondNumber = +prompt("Enter second number?");

const calculatorBody = (a, operator, b) => {
  if (isNaN(a) || isNaN(b)) {
    alert("You pick symbol instead number");
  }

  switch (operator) {
    case "+":
      return a + b;
      break;

    case "-":
      return a - b;
      break;

    case "*":
      return a * b;
      break;

    case "/":
      return a / b;
      break;

    default:
      alert("Please enter numeric,symbols are not supported");
      return;
  }
};
alert(calculatorBody(firstNumber, mathOperator, secondNumber));
