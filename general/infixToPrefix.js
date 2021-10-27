let str = "a+b-c+d*(e-f)/g+(h*(i/j))"




function solve(s) {
    let st = [];
    let res = [];
    for (i = 0; i < s.length; i++) {
        if ((s[i] >= "a" && s[i] <= "z") || (s[i] >= "A" && s[i] <= "Z")) {
            res.push(s[i])
        }
        else if (s[i] == "(") {
            st.push(s[i])
        }
        else if (s[i] == ")") {
            while (st.length && st[st.length - 1] !== "(") {
                res.push(st[st.length - 1]);
                st.pop()
            }
            if (st.length) {
                st.pop()
            }
        }
        else {
            while (st.length && tell(st[st.length - 1]) >= tell(s[i])) {
                res.push(st[st.length - 1])
                st.pop()
            }
            st.push(s[i])
        }
    }

    while (st.length) {
        res.push(st[st.length - 1])

        st.pop()
    }

    return res.join("")
}

let ans = solve(str)
console.log(ans)















function tell(s) {
    if (s == "**" ^ s == "^") {
        return 3
    }
    else if (s == "*" || s == "/") {
        return 2
    }
    else if (s == "+" || s == "-") {

        return 1
    }
    else return -1
}