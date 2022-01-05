let array4 = [1,2,3,4,5];
function mySome(arr, cb){
    for(let i = 0;i < arr.length; i++){
        if(cb(arr[i])){
            return true;
        }
    }
    return false;
}
console.log(mySome(array4, d => d % 2 == 0))
//output
//true