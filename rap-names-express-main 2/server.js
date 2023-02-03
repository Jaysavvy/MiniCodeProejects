const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const PORT = 2020;

const ejs = require('ejs');
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(express.json())


// this line of code does a response to from the client to get ejs file 
app.get('/', (request, respnse) =>{ 
    
    respnse.send(__dirname + '/index.ejs')
})

// this line of code does a post of from ejs to the client 
app.post('/', (request, respnse) =>{ 
    
    respnse.send(__dirname + '/index.ejs')
})

// this line of code 
app.put('/', (request, respnse) =>{ 
    
    respnse.send(__dirname + '/index.ejs')
})

app.delete('/', (request, respnse) =>{ 
    
    respnse.send(__dirname + '/index.ejs')
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})