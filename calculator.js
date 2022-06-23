
let num1 = prompt('Please type first number: ');
let num2 = prompt('Please type second number: ');

let operator = prompt('Please select the arithmetic operator e.g + - / *: ');

let float1=parseFloat(num1)
let float2=parseFloat(num2)

if (operator === "+"){
        sum = float1 + float2
        alert(sum);
    }

    else if (operator === "-"){
       
            subtract = float1 - float2
            alert(subtract);
        }

        else if (operator === "/"){
                division = float1 / float2
                alert(division);
            }
            else if (operator === "*"){
                product = float1 * float2
                alert(product);
            }

            else {alert("Arithmetic operator is invalid.Please select a valid operator")}

