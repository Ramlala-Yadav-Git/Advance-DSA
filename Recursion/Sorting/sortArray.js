
let data = [2, 14, 8, 8, 9]

function sort(arr, n) {

    for (let i = 0; i < n; i++) {
        for (let j = i; j < n; j++) {

            if (arr[j] < arr[i]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr

}
let x = sort(data, data.length)
console.log(x)