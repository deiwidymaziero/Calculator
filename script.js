// Global variables
let num1 = '';
let num2 = '';
let operationSelect = '';


function insert(num) {

    if ( document.getElementById('resultado').innerHTML.length == 8) {

        return;

    }


    if (operationSelect == '') {

        num1 = num1 + num;
        document.getElementById('resultado').innerHTML = num1;

    } else {
        num2 = num2 + num;
        document.getElementById('resultado').innerHTML = num2;
    }

}
function setOperation(operation){
    if (num2 != '') {
        calc();
    }
    operationSelect = operation;
    if (operation == '√') {
        calc();
    }
}


function calc(){
    let result = '';

    let num1Calc = parseFloat(num1);
    let num2Calc = parseFloat(num2);

    if (operationSelect == ''){
        return;

    }

    if (operationSelect == '+') {
        result = num1Calc + num2Calc;
    }
    if (operationSelect == '-') {
        result = num1Calc - num2Calc;
    }
    if (operationSelect == '*') {
        result = num1Calc * num2Calc;

    }
    if (operationSelect == '/'){
        result = num1Calc / num2Calc;

    }
    if (operationSelect == '%'){
        result = (num1Calc / 100) * num2Calc;
    }

    if (operationSelect == '√'){
        result = Math.sqrt(num1);
    }


    if (result.toString().includes('.')) {
        const splits = result.toString().split('.');
        let antes = splits[0].toString();
        result = result.toFixed(7 - antes.length);
    }



    document.getElementById('resultado').innerHTML = result;
    num1 = result.toString();

}

function reset() {
    num1 = num2 = operationSelect = '';
    document.getElementById('resultado').innerHTML = "";
}

document.addEventListener("keypress", function(event) {
    console.log("key --", event.key);
    console.log("key --", event.code);

    if (isNaN(event.key)){

        if (event.key == '+'){
            setOperation("+")
        }

        if  (event.key == '-'){
            setOperation("-")

        }

        if (event.key == '/'){
            setOperation("/")

        }

        if (event.key == '*'){
            setOperation("*")

        }

        if (event.key == 'Enter'){
            calc()
        }






    } else {
        insert(event.key);


    }



});






