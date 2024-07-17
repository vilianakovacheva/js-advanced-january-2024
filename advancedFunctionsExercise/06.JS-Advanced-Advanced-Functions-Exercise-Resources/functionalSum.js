function add(num) {
    let sum = num;

    function calculate(num2) {
        sum += num2;
        return calculate;
    }

    calculate.toString = function () {return sum};
    return calculate;

}
console.log(add(1));
console.log(add(1)(6)(-3));