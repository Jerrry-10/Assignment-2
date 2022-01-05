console.log("myEach function");
fruits = ["Apple","Orange","Cherry"];
function myEach(arr, CB){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i] + CB());
    }
}
//function callbackFunc(){
//    return "s";
//}
//myEach(fruits, callbackFunc)
myEach(fruits, s => "s")
//////////////////////////////////////////

console.log("myMap function");
let array = [1,2,3,4,5];

function myMap(arr, cb){
    let MapArr = [];
    for(let i = 0; i < arr.length; i++){
        MapArr.push(cb(arr[i]));
    }
    return MapArr;
}

const map1 = myMap(array, a => a + 1);
console.log(map1);
////////////////////////////////////////////
console.log("myFilter function");
let words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
function myFilter(arr, cb){
    const newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(cb(arr[i])){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
const b = item => item.length > 6;
console.log(myFilter(words, b));
////////////////////////////////////////
console.log("mySome");
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