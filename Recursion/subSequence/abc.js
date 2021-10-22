let str = "abc"


function sub(s, res, i) {
    if (res.length == s.length) {
        // console.log(res);
        return
    }
    res += s.substring(i, i + 1)
    console.log(res)
    return sub(s, res, i + 1)
}
sub(str, "", 0)