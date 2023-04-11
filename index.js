const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello  Everyone im here for you hola')
})

app.listen(4000, ()=>{
    console.log("Started server");
}
)
