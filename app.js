var add = function (n1, n2) {
    return n1 + n2;
};
var printResult = function (num) {
    console.log(num);
};
var addAndHandle = function (n1, n2, cb) {
    var result = n1 + n2;
    cb(result);
};
printResult(add(5, 12));
var combineValues;
combineValues = add;
// combineValues = printResult;
// combineValues = 5;
console.log(combineValues(8, 8));
// let someValue: undefined;
addAndHandle(10, 20, function (result) { return console.log(result); });
