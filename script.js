function add() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const sum = num1 + num2;
    document.getElementById("output").innerHTML = `The sum is: ${sum}`;
}

function sub() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const diff = num1 - num2;
    document.getElementById("output").innerHTML = `The difference is: ${diff}`;
}

function mul() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const pro = num1 * num2;
    document.getElementById("output").innerHTML = `The product is: ${pro}`;
}

function div() {
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    const res = num1 / num2;
    document.getElementById("output").innerHTML = `The answer is: ${res}`;
}
