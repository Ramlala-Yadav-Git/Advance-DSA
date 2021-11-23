let mat = [[0, 0, 1], [1, 1, 1], [0, 1, 1]]

function solve(mat) {
    let temp;
    let res = -1;
    let index;
    for (let i = 0; i < mat.length; i++) {
        temp = Number(mat[i].join(""))
        if (temp > res) {
            res = temp;
            index = i;
        }

    }

    return [res, index];
}
console.log('solve', solve(mat))

function first(a) {
    return a * 2;
}

function second(b) {
    return a * 3
}

let obj = {
    a: first(1),
    b: second(3),
    c: {
        a: first(2),
        b: second(3),
        c: {
            a: first(3)
        }

    }
}