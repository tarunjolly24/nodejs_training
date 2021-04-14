

function makePromisee(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(1);
        },1000);
    })
}


let abc=makePromisee().then((data)=>{
    console.log(data);
    // console.log(abc)
    // makePromisee();
    
});

 abc.then((dataaa)=>{
    console.log(abc);
    console.log(dataaa);

});
// abc.then((get)=>{
//     // console.log(abc);
//     console.log(get);
// })

// console.log(abc);