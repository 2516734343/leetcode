/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
     var result = [];
    for(let i=0;i<candies.length;i++){
        if(candies[i] + extraCandies >= Math.max(...candies)){
            result.push(true);
        } else {
            result.push(false);
        }
    }
    return result;
};
console.log(kidsWithCandies([2,3,5,1,3],3));
