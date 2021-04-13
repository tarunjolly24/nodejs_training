const http = require('http');
const fs = require('fs');
const url = require('url');
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
    "userame": "aroman",
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

const students = [
    {
        "name": "tarun",
        "branch": "it",
    },
    {
        "name": "riya",
        "branch": "cse",
    },
    {
        "name": "john",
        "branch": "ece",
    },
    {
        "name": "dean",
        "branch": "eee",
    },
    {
        "name": "mark",
        "branch": "it",
    },
    {
        "name": "henry",
        "branch": "cse",
    },
    {
        "name": "sagar",
        "branch": "cse",
    },
]

const autoComplete = (val) => {
    let output = [];
    for (let user in users) {
        // console.log();
        if (users[user].userame.indexOf(val) > -1) {
            output.push(users[user].userame);
        }
    }
    console.log(output);
    return output;
}

const filterStudent = (val) => {
    if (val === '') {
        return students;
    } else {
        let output = [];
        for (let i in students) {
            if (val === students[i].branch) {
                output.push(students[i]);
            }
        }

        return output;

    }

}




const server = http.createServer((req, res) => {


    const queryObject = url.parse(req.url, true);
    // console.log("queryobject", queryObject);
    req.url = queryObject.pathname;
    switch (req.url) {
        case  '/':
            const ans = autoComplete(queryObject.query["search"]);
            res.end(JSON.stringify(ans));
            break;
        case  '/student':
            let query = queryObject.query;
            if (query["branch"] === undefined) {
                const ans = filterStudent('');
                console.log(ans);
                // res.write(ans);
                res.end(JSON.stringify(ans));
            } else {
                const ans = filterStudent(query["branch"]);
                res.end(JSON.stringify(ans));
            }
            break;
        default:
            break;


    }
    



})

server.listen(3000, () => {
    console.log('http://127.0.0.1:3000');
});