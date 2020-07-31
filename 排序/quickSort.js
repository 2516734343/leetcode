function quickSort(arr) {
    var len = arr.length;
   function _quickSort(start,end,arr){
       if(start > end || start > len - 1) return;
       var key = arr[end],low = start,height = end;
       while (low < height){
           while(arr[low] <= key && low<height){
               low++;
           }
           arr[height] = arr[low];
           while(arr[height] >= key && low<height) {
               height--;
           }
           arr[low] = arr[height];
       }
       if(arr[low] === arr[height]) {
           arr[low] = key;
       }
       _quickSort(start,low-1,arr);
       _quickSort(low+1,end,arr);
       // console.log(low,height);
   }
   _quickSort(0,len-1,arr);


}
var arr = [4,3,5,8,9,1,2];
quickSort(arr);
console.log(arr);
