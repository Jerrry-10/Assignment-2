const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
function myIndexOf(arr,target){
    for(let i = 0; i < arr.length;i++){
        if(arr[i] == target){
            return i;
        }
    }
    return -1;
}
console.log(myIndexOf(beasts,"duck"));