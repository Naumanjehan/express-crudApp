
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

app.put('/api/user/:id', (req, res) =>{
    const userId = parseInt(req.params.id)
    const updateUser = req.body;
    const userIndex = users.findIndex(user => user.id === userId)
    if(userIndex === -1){
        res.status(404).json({message : "user not found"})
    }
  users[userIndex] = {
        ...users[userIndex],
        ...updateUser
    }
    res.status(200).json({message : "update user successfuly", data: users[userIndex]})
})

app.delete('/api/user/:id', (req, res) =>{
    const userId = parseInt(req.params.id)
    const userIndex = users.findIndex(user => user.id === userId)

    if(userIndex === -1){
        res.status(404).json({message : "user not found"})
    }
    users.splice(userIndex, 1)
    res.status(200).json({message : "delete user successfuly"})


})
app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`)
})