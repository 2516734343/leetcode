function mergeSort (arr) {
        var len = arr.length;
        if(len < 2) {
            return arr;
        }
        var mid = Math.floor((len) / 2);
        //拆分成两个子数组
        var left = arr.slice(0,mid);
        var right = arr.slice(mid,len);
        var leftMergeSort = mergeSort(left);
        var rightMergeSort = mergeSort(right);
        return merge(leftMergeSort,rightMergeSort);

}
function merge(left,right) {
    let result = [];
    while (left.length && right.length) {
        if(left[0] <= right[0]){
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    while (left.length) result.push(left.shift());
    while (right.length) result.push(right.shift());
    return result;
}
var arr = [1,4,6,2,5,9,7,0];
console.log(mergeSort(arr));
