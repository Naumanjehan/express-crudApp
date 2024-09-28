
const express = require('express')

const app = express();
const PORT = 3000;
app.use(express.json());

const users =[
    {id: 1, name: 'nauman', email: 'naumankhan@gamil.com'},
    {id: 2, name: 'khan', email: 'khan1@gamil.com'},
]
app.get('/api/user', (req, res) =>{
    res.status(200).json({message : "feching all user", data: users})
})


app.post('/api/user', (req, res) =>{
    const user = req.body;
    const newUser = {
        id: users.length + 1,
        ...user,
    }
    users.push(newUser)
    res.status(200).json({message : "created new user", data: newUser})
})


app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`)
})