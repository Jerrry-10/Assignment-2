function myEvery(arr, cb){
    let counter = 0
    for(let i = 0; i < arr.length; i++){
        if(cb(arr[i])){
            counter++
        }
    }
    if(counter == arr.length){
        return true;
    }
    else {
        return false;
    }
}
let array = [1, 30, 31, 29, 10, 13];
console.log(myEvery(array,a => a < 40))