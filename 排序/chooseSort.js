function chooseSort(arr) {
    var len = arr.length;
    for(let i=0;i<len;i++){
        var min = i;
        for(let j=i+1;j<len;j++){
            if(arr[min] > arr[j]){
                min = j;
            }
        }
        var  tmp = arr[i];
        arr[i] = arr[min];
        arr[min] = tmp;
    }
    return arr;
}
console.log(chooseSort([4,5,1,9,10,-1]));

