console.log('Hello');

const promiseOne = new Promise((res, rej) => {
    setTimeout(() => {
        console.log("Coding Blocks");
        res();
    }, 5000)
})

promiseOne.then(() => {
    console.log("Completed");
})

