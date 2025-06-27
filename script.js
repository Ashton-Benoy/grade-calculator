function calculate(operation) {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);
  let result;

  if (isNaN(num1) || isNaN(num2)) {
    result = "Please enter both numbers.";
  } else {
    switch (operation) {
      case "add":
        result = num1 + num2;
        break;
      case "subtract":
        result = num1 - num2;
        break;
      case "multiply":
        result = num1 * num2;
        break;
      case "divide":
        if (num2 === 0) {
          result = "Cannot divide by zero.";
        } else {
          result = num1 / num2;
        }
        break;
    }
  }

  document.getElementById("result").innerText = "Result: " + result;
}

function square() {
  let num = parseFloat(document.getElementById("num1").value);
  if (isNaN(num)) {
    document.getElementById("result").innerText = "Enter a number in box 1.";
  } else {
    document.getElementById("result").innerText = "Result: " + (num * num);
  }
}

function cube() {
  let num = parseFloat(document.getElementById("num1").value);
  if (isNaN(num)) {
    document.getElementById("result").innerText = "Enter a number in box 1.";
  } else {
    document.getElementById("result").innerText = "Result: " + (num * num * num);
  }
}
