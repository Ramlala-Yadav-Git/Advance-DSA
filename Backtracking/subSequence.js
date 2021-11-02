


let arr = "123"

function subSeq(s, l, res) {

    for (let i = l + 1; i < s.length; i++) {
        res += s[i];
        console.log(res);
        subSeq(s, i, res);
        res = res.substr(0, res.length - 1)
    }
}

subSeq(arr, -1, "")

