function calculator() {
    let num1Ref = document.getElementById("num1");
    let num2Ref = document.getElementById("num2");
    let resultRef = document.getElementById("result");

    let obj = {
        init(selector1, selector2, result) {
            selector1 = Number(num1Ref.value)
            selector2 = Number(num2Ref.value);
            result = Number(result);
        },
        add() {
            let res = Number(num1Ref.value) + Number(num2Ref.value);
            resultRef.value = res;
        },
        subtract() {
            let res = Number(num1Ref.value) - Number(num2Ref.value);
            resultRef.value = res;
        }
    }
    return obj;

}
const calculate = calculator();

calculate.init('#num1', '#num2', '#result');




