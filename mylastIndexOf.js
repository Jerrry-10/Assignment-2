const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo'];
function myUnshift(arr, target){
    for(i = arr.length; i > 0; i--){
        if(arr[i] == target){
            return i;
        }
    }
    return -1;
}
console.log(myUnshift(animals,'Dodo'));
//output
//3