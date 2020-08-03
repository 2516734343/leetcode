/**
 * 二分查找
 * @param arr
 * @param target
 */
var num = 0;
function binarySearch(arr,target) {
    if(target < arr[0] || target > arr[arr.length -1]) return false;
    var minIndex = 0,maxIndex = arr.length - 1;
    while (minIndex <= maxIndex){
        num++;
        var mid = Math.floor((minIndex + maxIndex) / 2 );
        if(arr[mid] === target) {
            return true;
        } else if(arr[mid] < target) {
            minIndex = mid+1;
        } else {
            maxIndex = mid - 1;
        }
    }
    return false;
}
var arr = [1,3,6,8,12,24];
console.log(binarySearch(arr,6));
console.log(num);
