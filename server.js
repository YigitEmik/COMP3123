var express = require('express');

let app = express();

const SERVER_PORT = 8081
app.listen(SERVER_PORT,() => {
    console.log('Listening on port http://localhost:%s/' + SERVER_PORT)
})

//http://localhost:8081/
app.get('/', (req, res) => {
    res.send("<h1>ITS WORKINGG!!</h1>")
})

//http://localhost:8081/hello
app.get("/hello", (req, res) => {
    res.send('Hello Express JS')
})

//Path OR Route Parameter
//http://localhost:8081/user/yigit/emik
app.post("/user/:fname/:lname", (req, res) => {
    const person = {
        fname : req.params.fname,
        lname : req.params.lname
    }
    res.send(req.params)
})

//QueryString Parameter
//http://localhost:8081/user?id=1&fn=Yigit&ln=Emik
app.get("/user", (req, res) => {
    const pid = req.query

    res.send(JSON.stringify(pid))
})