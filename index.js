let time;
// let execute = debounce();
function debounce() {
    // console.log("hi");
    if (time) {
        clearTimeout(time)
    }
    time = setTimeout(() => {
        main()
        // console.log()
    }, 300)
}

let arr = ["ramlala", "somesh", "ldyadav", "gopichandra", "himesh"]
function main() {
    let data = document.getElementById("input").value;
    let root = document.getElementById("root");
    let el = arr.filter((el) => {
        return el.includes(data);
    })
    root.innerText = ""
    el.forEach(element => {
        let list = document.createElement("li");
        list.innerText = element;
        root.append(list);

    });
}
let exec = throttle();

function throttle() {
    let flag = true;
    return function () {
        if (flag) {
            main();
            flag = false;
            setTimeout(() => {
                flag = true;
            }, 1000)
        }
    }
}