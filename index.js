const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 4000


app.use(bodyParser.json())




app.get('/',(req,res)=>{
    res.send('OK bro')
})




app.listen(port, () => console.log(`Listening on port ${port}!`))