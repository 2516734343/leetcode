function mergeSort (arr) {
    function _mergeSort (arr,left,right) {
        if(left < right){
            var mid = Math.floor((left + right) / 2);
            arr = _mergeSort(arr,left,mid);
            arr = _mergeSort(arr,mid+1,right);
            return arr;

        }
    }
}
