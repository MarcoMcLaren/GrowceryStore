//write me a function that takes a string and returns the string reversed   
function reverseString(str) {
    return str.split("").reverse().join("");
}

function calculateDaysBetweenDates(begin, end) {
    var begin = new Date(begin);
    var end = new Date(end);
    var timeDiff = Math.abs(end.getTime() - begin.getTime());
    var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
    return diffDays;
}

//write me a typescript function for angualr that takes an income and returns the tax amount
function calculateTax(income) {
    var tax = 0;
    if (income <= 18200) {
        tax = 0;
    } else if (income > 18200 && income <= 37000) {
        tax = (income - 18200) * 0.19;
    } else if (income > 37000 && income <= 87000) {
        tax = (income - 37000) * 0.325 + 3572;
    } else if (income > 87000 && income <= 180000) {
        tax = (income - 87000) * 0.37 + 19822;
    } else if (income > 180000) {
        tax = (income - 180000) * 0.45 + 54232;
    }
    return tax;
}