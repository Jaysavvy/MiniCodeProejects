const express = require('express');
const app = express();
const { MongoClient, ServerApiVersion, Db } = require('mongodb');
const PORT = 2020;
require('dotenv').config()

let db,
    dbConnectionStr = process.env.DB_STRING,
    
    dbName = 'Rapper'

    MongoClient.connect(dbConnectionStr, { useUnifiedTopology: true, useNewUrlParser: true, serverApi: ServerApiVersion.v1  })
    .then(client => {
        console.log(`Connected to ${dbName} Database`)
        db = client.db(dbName)
    }).catch(err => {
        const collection = client.db("test").collection("devices");
        // perform actions on the collection object
        client.close();
      });



const ejs = require('ejs');
const { response } = require('express');
app.use(express.static('public'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// this line of code does a response to from the client to get ejs file 
app.get('/', (request, respnse) =>{ 
    db.collection('quotes').find().sort({likes: -1}).toArray()
    .then(data =>{
        response.render('index.ejs', {info: data})
    })
    .catch(error => console.error(error))   
})

// this line of code does a post from  client to server
app.post('/addTeamMemeber', (request, respnse) =>{
    db.collection('quotes').insertOne({PlayerName: request.body.playerName,
    Position: request.body.position, likesS: 0})
    .then(result => {
        console.log('Team Member Added')
        response.redirect('/')
    })
    .catch(error => console.error(error))
})

// this line of code updates the information on the ejs 
app.put('/addOneLike', (request, respnse) =>{
    db.collection('quotes').updateOne({PlayerName: request.body.playerName, Position: request.body.position,likes: request.body.likesS},{
        $set: {
            likes:request.body.likesS + 1
          }
    },{
        sort: {_id: -1},
        upsert: true
    })
    .then(result => {
        console.log('Added One Like')
        response.json('Like Added')
    })
    .catch(error => console.error(error))

})

// this line of code deletes code found on the ejs 
app.delete('/deletePlayer', (request, respnse) =>{
    db.collection('quotes').deleteOne({PlayerName: request.body.playerName, Position: request.body.position})
    .then(result => {
        console.log('Player Deleted')
        response.json('Player Deleted')
    })
    .catch(error => console.error(error))

})

// this line of code deployes the server 
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})