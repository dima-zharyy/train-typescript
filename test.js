var btn = document.querySelector("button");
var input1 = document.querySelector("#num1");
var input2 = document.querySelector("#num2");
function add(num1, num2) {
    return num1 + num2;
}
btn === null || btn === void 0 ? void 0 : btn.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
