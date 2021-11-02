let arr = [1, 2, 8, 2, 3, 7, 9, 5]

// sort(arr, 0, arr.length - 1)
// console.log(arr);


function sort(arr, l, r) {

    if (r > l) { /// checking if right is less or not
        let m = l + Math.floor((r - l) / 2); // taking mid point
        sort(arr, l, m);
        sort(arr, m + 1, r); // splitting array into two parts
        merge(arr, l, m, r) // merging both the splitted array
    }



}

function merge(arr, l, m, r) {

    let n1 = m - l + 1;
    let n2 = r - m;

    let L = [];
    let R = []

    for (let i = 0; i < n1; i++) {
        L.push(arr[l + i]);

    }
    for (let j = 0; j < n2; j++) {
        R.push(arr[m + 1 + j]);
    }

    // console.log(L,R)
    let i = 0;
    let j = 0;
    let k = l;
    while (i < n1 && j < n2) {
        if (L[i] <= R[j]) {
            arr[k] = L[i];
            i++;
        }
        else {
            arr[k] = R[j];
            j++;
        }
        k++;
    }
    while (i < n1) {
        arr[k] = L[i];
        i++;
        k++;
    }
    while (j < n2) {
        arr[k] = R[j];
        j++;
        k++;
    }
}
