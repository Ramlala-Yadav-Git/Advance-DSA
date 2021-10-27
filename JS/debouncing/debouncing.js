let count = 0;
let timer;
function getData() {
    let data = document.getElementById('input').value;
    console.log(data);
}

function main() {
    if (timer) {
        clearInterval(timer);
    }
    timer = setTimeout(() => {
        getData()
    }, 300)
}



