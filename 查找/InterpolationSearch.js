/**
 * 插值查找 下标的跨度和值的跨度差不多的
 * @param arr
 * @param target
 * @constructor
 */
function InterpolationSearch(arr,target) {
    if(target < arr[0] || target > arr[arr.length -1]) return false;
    var minIndex = 0,maxIndex = arr.length - 1;
    while (minIndex <= maxIndex){
        var mid = Math.floor((target - arr[minIndex]) / (arr[maxIndex] - arr[minIndex]) * (maxIndex - minIndex) + minIndex);
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
console.log(InterpolationSearch(arr,6));
