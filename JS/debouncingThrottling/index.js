
let count = 0;
let timer;
function getData() {
    let data = document.getElementById('input').value;
    console.log(data);
}

function main(e, delay) {
    if (timer) {
        clearInterval(timer);
    }
    timer = setTimeout(() => {
        getData()
    }, 300)
}

function throttle(timeFrame) {
    var lastTime = 0; /// for the first time
    return function () {
        var now = new Date(); // taking the time for the first time
        if (now - lastTime >= timeFrame) {
            main(); // calling the function fir the first time
            lastTime = now; // setting the lasttime as now so that further application can be tackled
        }
    };
}



let execute = throttle(3000)


function main() {
    let input = document.getElementById('input').value;
    console.log(input
    );
}