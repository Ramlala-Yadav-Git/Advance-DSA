const myPromise = new Promise((res, rej) => {

    rej("gjdslgkj")

});

myPromise.then((res) => {
    console.log(res)
})

async function a() {
    let a = await fetch("");


}



