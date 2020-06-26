//import the module into the file
var mathLib = require('./myMath');

function init() {
    console.log("Intro");

    var res =mathLib.sum(21, 21);
    console.log("Result:" + res);

    var smaller = mathLib.smaller(12, 12);
    console.log("Result:" + smaller);

    var greater = mathLib.greater(99, 1223,0);
    console.log("Result:" + greater);

    var mult = mathLib.multiply(10, 10);
    console.log("Result:"+ mult);
    
    var div = mathLib.divide(1,0);//if user tries to divide by zero show error and return 0 as a result 
    console.log("Result:"+div);

    var e = mathLib.isEven(99);
    console.log("Result: "+ e);

    var o = mathLib.isOdd(99);
    console.log("Result: "+ o);
}

init();