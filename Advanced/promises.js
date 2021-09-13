const promise = new Promise((ressolve, reject) => {
    setTimeout(() => {
        ressolve('Done');
    }, 1000);

    setTimeout(() => {
        reject(new Error('Woops'));
    },1000);
});



promise.then(res => {
    console.log(res);
}).catch(err=>{
    console.log(err);
});

