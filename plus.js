var plusOne = function (digits) {
    var len = digits.length;
    for(var i = len - 1;i >0;i--){
       digits[i]++;
       digits[i] %= 10;
       if(digits[i] != 0){
           return digits;
       }
    }
    digits = [...Array(len + 1)].map(_ => 0);
    digits[0] = 1;
    return digits;
}
console.log(plusOne([9,9,9]));
