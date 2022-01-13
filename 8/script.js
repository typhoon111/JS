function Calculator(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;

    this.sum = function (a, b) {
        return this.num1 + this.num2
    }
    this.subtraction = function (a, b) {
        return this.num1 - this.num2
    }
    this.multiplication = function (a, b) {
        return this.num1 * this.num2
    }
    this.division = function (a, b) {
        return this.num1 / this.num2
    }
}