function getNumber(num) {

    var number = document.getElementById("input");
    input.value += num;
}

function clearall() {
    var number = document.getElementById("input");
    var result = document.getElementById("result");
    input.value = "";
    result.value = "";
}

function calculateResult() {
    var number = document.getElementById("input");
    var result = document.getElementById("result");
    result.value = " " + eval(input.value);
}

function clearone() {
    var number = document.getElementById("input");
    var str = input.value;
    var num = str.length;
    var str1 = str.slice(0, num - 1);
    input.value = str1;
}


