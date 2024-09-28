
const express = require('express')

const app = express();
const PORT = 3000;
app.use(express.json());

const users =[
    {id: 1, name: 'nauman', email: 'naumankhan@gamil.com'},
    {id: 2, name: 'khan', email: 'khan@gamil.com'},
]


app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`)
})