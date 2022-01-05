let array = [1,2,3,4,5];

function myMap(arr, cb){
    let MapArr = [];
    for(let i = 0; i < arr.length; i++){
        MapArr.push(cb(arr[i]));
    }
    return MapArr;
}

const map = myMap(array, a => a + 1);
console.log(map);
//output
//[ 2, 3, 4, 5, 6 ]