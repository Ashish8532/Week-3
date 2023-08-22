// Here I have added the eventlistener on calculate sum button 
document.getElementById("sum").addEventListener("click", doSum);

// Here doSum function is doing sum of two number
function doSum() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    // Here  I have introduced one Syntax error by removing parenthesis in if statement.
    // the syntax error is displayed on VS code debug console at compile-time error.
    if (!isNaN(num1) && !isNaN(num2) {
        let sum = num1 + num2;
        document.getElementById("add").innerHTML = "Addition is: " + sum;
    }
    else {
        alert("Enter numbers properly!");
    }

}

