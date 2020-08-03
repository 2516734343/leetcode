/**
 * 顺序查找
 * @param arr
 * @param target
 */
function inOrderSearch(arr,target) {
    for (let i = 0; i < arr.length; i++) {
        if(target === arr[i]) {
            return true;
        }
    }
    return false;
}
var arr = [1,3,6,8,12,24];
console.log(inOrderSearch(arr,6));
