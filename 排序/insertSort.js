function insertSort(arr) {
    for(let i=1;i<arr.length;i++){
        var temp = arr[i];
        // 一直与左边的元素比较，直到找到比它小的元素
        for(let j=i ;j >= 0 ;j--){
            if(j > 0 && arr[j-1] > temp){
                arr[j] = arr[j-1];// 后面的数字往前面移动了
            } else {
                arr[j] = temp;
                break;
            }

        }

    }
    return arr;
}
console.log(insertSort([1,4,7,2,5,0,10]));

