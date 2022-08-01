// reverse an array
let arr =[-4,9,25,0]

function reverseArray(arr){
    let tempArray = [];
    for(let i =arr.length-1; i>=0; i--){
        tempArray[arr.length-1-i] = arr[i];
    }

    return tempArray;
}

console.log("Answer by first method", reverseArray(arr));

function reverseArray2(arr){
    let temp;
    for(let i=0; i<Math.floor(arr.length/2); i++){
      temp = arr[i];
      arr[i]= arr[arr.length-i-1]
      arr[arr.length-i-1] = temp;''
    }
    return arr
}
console.log("Answer by Second method", reverseArray2(arr));