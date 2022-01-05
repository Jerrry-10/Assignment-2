let animals = ['pigs', 'goats', 'sheep'];
function myPush(arr, elementToAdd){
    arr[arr.length] = elementToAdd;
    return arr.length;
}
const count = myPush(animals, 'cows');
console.log(count);
console.log(animals)
//output
//4
//[ 'pigs', 'goats', 'sheep', 'cows' ]