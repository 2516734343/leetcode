function demo(arr){
    var count = 0;
    for(let i=0;i<arr.length;i++){
        var reg = /[a-zA-Z]+$/g;
        if(reg.test(arr[i]) && arr[i].length < 10){
            count++;
        }
    }
    // console.log(count);
    return count;
}
var n = 5;
var arr = new Array(n);
//for(let i=0;i<n;i++){
//   str = read_line();
//   arr.push(str);
//}
// while((line = read_line()) != ''){
//     arr.push(line);
// }
arr = ['BA','aOWVXARgUbJDG','OPPCSKNS', 'HFDJEEDA' ,'ABBABBBBAABBBAABAAA'];
// console.log(arr);
var result = demo(arr);
// printsth(result);
console.log(demo(arr));
