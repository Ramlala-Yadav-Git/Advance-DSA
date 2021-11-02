
let arr = [];
let count = 0;

// making matrix for the Knight travesal
for (let i = 0; i < 10; i++) {
    let temp = [];
    for (let j = 0; j < 10; j++) {
        temp.push(0)
    }
    arr.push(temp)
}

function Knight(r, c, n) {
    if (r >= 10 || r < 0 || c >= 10 || c < 0) {
        return; // if cloumn or row are not appropriate we will back
    }

    if (n == 0 && arr[r][c] == 1) {
        return // if n is zero and that shell is already filled we will back
    }

    if (n == 0) {
        count++; // if n==0 we will increase our count we cause we can place our knight there
        arr[r][c] = 1; //  now we will fill that shell by 1 so that we can take reference further 
    }

    else {
        Knight(r + 2, c + 2, n - 1) // we will call all the possible pair where our knight can go 
        Knight(r + 2, c - 2, n - 1)
        Knight(r + 2, c - 1, n - 1)
        Knight(r + 2, c + 1, n - 1)
        Knight(r + 1, c + 1, n - 1) // either  knight can move two step down + 1 step ahead or backward or >
        Knight(r + 1, c - 1, n - 1)// it can move two step up and 1 step ahead or backward 
        Knight(r + 1, c + 2, n - 1)
        Knight(r + 1, c - 2, n - 1)
    }


}

Knight(3, 3, 2)
console.log(count)