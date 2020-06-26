module.exports = {

    sum: function(num1, num2) {
        return num1 + num2;
    },

    smaller: function(num1, num2) {
        if (num1 < num2)
            return num1;

         return num2;

    },

    greater: function(num1, num2, num3) {
        //if number one is greater than number 2 and is greater than number 3, return number 1
        if(num1 > num2 && num1 > num3) return num1;
        if(num2 > num1 && num2 > num3) return num2;
        return num3;
    },

    multiply: function(num1, num2) {
        return num1 * num2;
    },

    divide: function(a, b){
        if (b == 0) {
            console.log("Error, You should not divide by zero");
            return 0;
        }
        return a/b;
    },

    isEven: function(num) {
        var res = num % 2;  //divide by 2, get the residue (not the result). % modulus (mod) operator 
                            //if(res == 0) return true;
                            //return false;
                            //return (num %2) == 0;

        return res == 0;    // Return to true or false

    },
    
    isOdd: function(num) {
    var res = num % 3;
    return res == 1;
    }
};