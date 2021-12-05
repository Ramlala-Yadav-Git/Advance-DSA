
let input = [2, 5, 1, 8, 2, 9, 1]
let k = 3;

// Find the max sum of subArray of length K

/*
First Approach   -- By using Brute force

Steps -
1. Make all the subaaray 
2. Find out the max sum of length k SsubArray
*/


function firstApproach(arr, n, k) {
    let finalRes = -9879797998;
    for (let i = 0; i < n; i++) {
        let subArray = [];
        for (let j = i; j < n; j++) {
            subArray.push(arr[j]);
            if (subArray.length == k) {
                let s = sum(subArray);
                if (s > finalRes) {
                    finalRes = s;
                }
            }
        }

    }
    console.log(finalRes);
}

function sum(arr) {
    let s = 0;
    for (let i = 0; i < arr.length; i++) {
        s += arr[i];
    }
    return s
}
// firstApproach(input, input.length, k)


/*
Second approach ----  by using sliding window method
*/

function secondApproach(arr, n, k) {

    let res = -79879798; // taking minimum value for the final result

    let i = 0, j = 0, sum = 0;

    while (i < n && j < n) { // we will take two pointer i and j
        if (j - i < k) {  // while we haven't hit the target window we will keep adding the elmts in our sum
            sum += arr[j];
            j++;

        }

        else { // once we hit window we will increase both pointer and save only higher result
            res = Math.max(sum, res)
            sum += arr[j] - arr[i];
            j++;
            i++;
        }
    }


    console.log('res', res)


}
secondApproach(input, input.length, k)