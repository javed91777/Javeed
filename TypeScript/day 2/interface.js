var firstName = 'Ravi';
console.log(firstName);
var numerical1 = 30;
console.log(numerical1);
var cb = function (i) {
    console.log(i);
};
for (var i = 0; i < 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 2000);
}
