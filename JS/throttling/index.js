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



let execute = throttle(300)


function main() {
    let input = document.getElementById('input').value;
    console.log(input
    );
}