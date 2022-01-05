const array1 = [1, 2, 3];
function myIncludes( arr, cb){
    for(let i = 0; i < arr.length;i++){
      if(arr[i] === cb){
        return true;
      }
    }
    return false;
    
}
console.log(myIncludes(array1, 2))