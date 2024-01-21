let displayValue = "0";
let operator = false; 
let allowDecimal = false; 
let equation = [];

console.log("this is 2nd Value line 6: " + secondLastCharacter(displayValue));
console.log("this is display Value: " + displayValue);

$(function () {
  $(".number-button, .operator-button").on("click", function () {
    let buttonValue = $(this).val();

  

   if (buttonValue === ".") {
      if (displayValue.includes(".") && !isLastEntryAnOperator()) {
        if (isLastEntryDecimal()) {
          return displayValue;
        }
      }
    }

    // prevent two  decimals in one number

    if (buttonValue === ".") {
      // Split the expression into numbers, using regex to split by operators
      let numbers = displayValue.split(/[+\-*/]/);

      // Get the last number entered
      let lastNumber = numbers[numbers.length - 1];

      // Check if the last number already has a decimal point
      if (lastNumber.includes(".")) {
        return; // Prevent adding another decimal point in the same number
      }
      // Allow decimal point otherwise
    }

    // Handling consecutive operators
    // this is not happening. Objectiive =  If 2 or more operators are entered consecutively, the operation performed should be the last operator entered (excluding the negative (-) sign.
   // If the last operator is - and button value is opeartor other than - then delete operator -
   
    if (isOperator(buttonValue) && isOperator(lastCharacter(displayValue))) {
      
      if (buttonValue === "-" && lastCharacter(displayValue) !== "-") {
        displayValue = displayValue + buttonValue; // Allow for negative numbers
        console.log("this is display Value: " + displayValue);
        console.log("this is Last Char : " + lastCharacter(displayValue));
      }

      else if (buttonValue === "-" && lastCharacter(displayValue) === "-") {
        console.log("this is display Value: " + displayValue);
        console.log("Last Char : " + lastCharacter(displayValue));
        return; // Don't allow second minus)
      }
      else if (buttonValue === "*" && lastCharacter(displayValue) === "-" && secondLastCharacter(displayValue) === "*") {
        console.log("this is display Value: " + displayValue);
        console.log("Last Char : " + lastCharacter(displayValue));
        // displayValue += "this";// this is working 
        let withoutLastTwo = displayValue.slice(0, -2);
        console.log("without last 2 : " + withoutLastTwo);


            } 

      else if (
        isOperator(buttonValue) &&
        isOperator2(secondLastCharacter(displayValue)) &&
        lastCharacter(displayValue) === "-"
      ) {
        displayValue = displayValue + buttonValue; // Allow for negative numbers
        console.log("this is display Value: " + displayValue);
        console.log(
          "2nd Last Char : " + secondLastCharacter(displayValue)
        );
      } else {
        displayValue = displayValue.slice(0, -1) + buttonValue; // Replace the last operator
        console.log(
          "this is 2nd last:" + secondLastCharacter(displayValue)
        );
      }
    } else {
      if (displayValue === "0" && buttonValue !== ".") {
        displayValue = buttonValue;
      } else {
        displayValue += buttonValue;
      }
    }

// fix the issue of 5*-+5 

// if (isOperator(buttonValue) && isOperator(secondLastCharacter(displayValue))) {
//   displayValue = displayValue.slice(0, -2) + buttonValue; // Replace the last and 2nd last operator
//   console.log("this is 2nd last:" + secondLastCharacter(displayValue));
        
//       }

      // else if (lastCharacter(displayValue) === "-" && buttonValue !== "-" ){
        //     let lastSecondValue = secondLastCharacter(displayValue);
        // console.log("this is 2nd last 2:" + secondLastCharacter(displayValue));
        
      //     if (isOperator(lastSecondValue)) {
      //       displayValue = displayValue.replace(lastSecondValue, lastCharacter(displayValue));
      //     }
      //     else {displayValue = displayValue.replace("-", buttonValue);}
      //   }


      
      
      //  else if (buttonValue === "-" && isOperator2) {
      //   console.log("this is display Value: " + displayValue);
      //   console.log("Last Char : " + lastCharacter(displayValue));
      //   console.log("Last 2 last Char : " + secondLastCharacter(displayValue));
      //   displayValue = displayValue + buttonValue; // Allow for negative numbers
      //  }
      

    $("#display").val(displayValue);
  });
});



// this function checks is last operator is one of the operator. the function checks
// if isOperator function is TRUE. and it takes in function lastCharacter. So the last
// character function takes in displayValue. if its is an operator than this function
// returns TRUE . 

function isLastEntryAnOperator() {
  if (isOperator(lastCharacter(displayValue)))
  operator = true;
  return isOperator(lastCharacter(displayValue)) ;
  
}

function is2ndLastEntryAnOperator() {
  if (isOperator2(secondLastCharacter(displayValue)))
  operator = true;
  return console.log(isOperator2(secondLastCharacter(displayValue))) ;
  
}


function isLastEntryDecimal() {
  return isDecimal(lastCharacter(displayValue));
}

function isDecimal(character) {
  return ["."].includes(character);
}

function isOperator(character) {
  return ["+", "-", "*", "/"].includes(character);
}

function isOperator2(character) {
  return ["+", "-", "*", "/"].includes(character);
}

function lastCharacter(str) {
  return str[str.length - 1];
}

function secondLastCharacter(str) {
  return str[str.length - 2];
}

// console.log(secondLastCharacter(displayValue));

$("#equals").on("click", function () {
  try {
    displayValue = String(eval(displayValue));
  } catch (e) {
    displayValue = "Error";
  }
  $("#display").val(displayValue);
});

$("#delete").on("click", function () {
  displayValue = displayValue.slice(0, -1) || "0";
  $("#display").val(displayValue);
});

$("#clear").on("click", function () {
  displayValue = "0";
  $("#display").val(displayValue);
});
