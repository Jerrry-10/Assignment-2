function myFilter(arr, cb){
    const newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(cb(arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
const b = item => item.length > 6;
console.log(myFilter(words, b));