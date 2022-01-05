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
//output
//Apples
//Oranges
//Cherrys