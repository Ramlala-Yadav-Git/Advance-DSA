

let button = document.getElementById("button");
button.addEventListener("click", add);
let id = 0;

function add() {

    let input = document.getElementById("input").value;
    let payload = {
        id,
        status: false,
        input

    }
    id++;
    let data = JSON.parse(localStorage.getItem("data"));
    if (!data) {
        data = [payload];
    }
    else {
        data = [payload, ...data];
    }
    localStorage.setItem("data", JSON.stringify(data))
    let app = JSON.parse(localStorage.getItem("data"));
    append(app);

}

function append(data) {
    let root = document.getElementById("root");
    root.innerHTML = ""
    for (let i = 0; i < data.length; i++) {
        let list = document.createElement("li");
        list.innerHTML = `<p id=${data[i].id}>${data[i].input}${data[i].status ? "true" : "false"}<button onclick ="handleDelete(${data[i].id})"> delete </button> <button onclick ="handleToggle(${data[i].id})"> toggle </button></p> `
        root.append(list)
    }
}
function handleDelete(e) {
    let app = JSON.parse(localStorage.getItem("data"));
    let filt = app.filter((el) => el.id !== e)
    localStorage.setItem("data", JSON.stringify(filt))
    append(filt)
}

function handleToggle(e) {
    // alert(e)
    let app = JSON.parse(localStorage.getItem("data"));
    for (let i = 0; i < app.length; i++) {
        if (app[i].id === e) {
            app[i] = { ...app[i], status: !app[i].status }
            console.log('filt', app[i].status)
        }

    }
    localStorage.setItem("data", JSON.stringify(app))
    append(app)
}