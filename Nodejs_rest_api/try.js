const users = [{
    "userame": "tarun",
    "password": "123456",
    "firstname": "tarun",
    "lastname": "jolly"

}, {
    "userame": "riya",
    "password": "143456",
    "firstname": "riya",
    "lastname": "rana"
}, {
    "userame": "akshay",
    "password": "123486",
    "firstname": "akshay",
    "lastname": "kumar"
}, {
    "userame": "prabh",
    "password": "1234456",
    "firstname": "prabh",
    "lastname": "kaur"
}, {
    "userame": "john",
    "password": "155456",
    "firstname": "john",
    "lastname": "cena"
}, {
    "userame": "arman",
    "password": "1234446",
    "firstname": "roman",
    "lastname": "reign"
}, {
    "userame": "seth",
    "password": "233423",
    "firstname": "seth",
    "lastname": "rollins"
}, {
    "userame": "dean",
    "password": "1223456",
    "firstname": "dean",
    "lastname": "ambrose"
}];

const autoComplete=(val)=>{
    let output=[];
    for(let user in users){
        // console.log();
        if(users[user].userame.indexOf(val)>-1){
            output.push(users[user].userame);
            
        }
    }
    return output;
}

console.log(autoComplete("ar"));



// if (req.url === '/') {
    //     // http://127.0.0.1:3000/?search=ar
    //     //  /?search="string"    
    //     const ans = autoComplete(queryObject.query["search"]);
    //     res.end(JSON.stringify(ans));
    // }
    // if (req.url === '/student') {

    //     // http://127.0.0.1:3000/student?branch=ece
    //     let query = queryObject.query;
    //     if (query["branch"] === undefined) {
    //         const ans = filterStudent('');
    //         console.log(ans);
    //         // res.write(ans);
    //         res.end(JSON.stringify(ans));
    //     } else {
    //         const ans = filterStudent(query["branch"]);
    //         res.end(JSON.stringify(ans));
    //     }
    // }
    // if (req.url === '/home') {
    //     fs.readFile('./home.html', (err, file) => {
    //         res.write(file);
    //         res.end();
    //     })
    // }
    // if (req.url === '/about') {
    //     fs.readFile('./about.html', (err, file) => {
    //         res.write(file);
    //         res.end();
    //     })
    // }
    // if (req.url === '/contactus') {
    //     fs.readFile('./contactus.html', (err, file) => {
    //         res.write(file);
    //         res.end();
    //     })
    // }
