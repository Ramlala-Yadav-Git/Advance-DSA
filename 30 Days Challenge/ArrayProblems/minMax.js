// Return max value from the array

let arr =[-4,5,2,31,9,25,0]
  // first solution Time complexity n, space 1;
function max(arr,n){
 let temp = Number.MIN_VALUE // take minumu value;
  for(let i=0; i<n; i++){
      if(arr[i] > temp){
          temp = arr[i];
      }
  }
  return temp;
}
console.log("Answer from first method using for loop",max(arr, arr.length));


// second solution 

function maxx(arr, i, maxTillNow){
   if(i == arr.length) return maxTillNow;
   return maxx(arr, i+1, Math.max(arr[i], maxTillNow));
}

console.log("Answer from second method using recursion",maxx(arr, 0, Number.MIN_VALUE));

// Third method

function maxxx(arr){
    let i=0,j=arr.length-1,temp= Number.MIN_VALUE;
    while(i<j){
      temp = Math.max(temp,arr[i], arr[j]);
      i++;
      j--;
    }
   temp = Math.max(temp,arr[i], arr[j]);
    return temp;
}
console.log("Answer from third method using two pointer method",maxxx(arr));