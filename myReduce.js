let array = [1,2,3,4];
function myReduce(arr, cb){
    let a = 0;
    for(let i = 0; i < arr.length;i++){
        a = cb(arr[i],a);
    }
    return a;
}
console.log(myReduce(array,(x,y)=> x + y))