function shellSort(arr) {
    var len = arr.length,gap,i;
    for (gap = Math.floor(len / 2);gap > 0;gap = Math.floor(gap / 2)){
        for (i=gap;i < len;i++){
            var temp = arr[i],j = i-gap;
            while (j>=0 && arr[j] > temp ) {
                arr[j + gap] = arr[j];
                j = j-gap;
            }
            if(j !== i-gap) {
                arr[j+gap] = temp;
            }
        }
    }
    return arr;
}
var arr = [1,3,5,4,7,9,8];
console.log(shellSort(arr));
