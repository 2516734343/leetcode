/**
 * 给两个整数数组 A 和 B ，返回两个数组中公共的、长度最长的子数组的长度。

示例 1:

输入:
A: [1,2,3,2,1]
B: [3,2,1,4,7]
输出: 3
解释: 
长度最长的公共子数组是 [3, 2, 1]。
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var length = 0;
var findLength = function(a, b) {
   var lena = a.length,lenb = b.length ,max = 0;;
   var def = new Array(lena + 1);
   for (let i = 0; i < def.length; i++) {
      def[i] = new Array(lenb+1);
      for (let j = 0; j < lenb + 1; j++) {
          def[i][j] = 0;
          
      }   
   }
   for (let i = 1; i <= lena; i++) {
       for (let j = 1; j <= lenb; j++) {
           if(a[i-1] === b[j-1]){
               def[i][j] = def[i-1][j-1]+1;
           } 
            max = Math.max(def[i][j],max);
       }   
    }
    return max;
};
var a = [1,2,3,2,1,1]
var b = [3,2,1,1,4,7,9]
findLength(a,b);

