var a = [12, -1, -7, 8, -15, 30, 16, 28]
var size = a.length
var k = 3
var i = 0
var j = 0
var st = []
var res = []
while (j < size) {

    if (a[j] < 0) {
        st.push(a[j])   //negative
    }
    if (j - i + 1 < k) {
        j++
    }
    else if (j - i + 1 == k) {
        if (st.length == 0) {
            res.push(0)
            i++
            j++
        }
        else {
            res.push(st[0])
            if (a[i] == st[0]) {
                st.shift()
            }
            i++
            j++
        }
    }

}
console.log(res)