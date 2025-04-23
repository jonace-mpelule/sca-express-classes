const express = require('express')
const users = require('./data/users')

const app = express()
const PORT = 3100

// parse the request body object
app.use(express.json())


//requires:email and password
app.post('/login', (req, res) => {
    const { email, password } = req.body


    // BAD REQUEST
    if (!email || !password) {
        return res.status(400).send({
            message: "Email and Password is required"
        })
    }

    const user = users.filter((user) => user.email == email)[0]

    if (!user) {
        return res.status(404).send({
            message: "user does not exist"
        })
    }

    if (user.password != password) {
        return res.status(404).send({
            message: "User with credentials does not exist"
        })
    }

    res.send({
        message: "Login Successful",
        data: user
    })
})


app.listen(PORT, () => console.log(`server running on port ${PORT}`))
