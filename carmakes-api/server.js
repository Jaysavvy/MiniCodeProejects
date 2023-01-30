const express = require('express');
const app = express()
const PORT = 8080

let carMake = { 
    model: 'A-Class',
    Make: 'Mercedes-Benz',
    Years: '2022',

}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/carport', (request, response)=>{
    response.json(carMake)
})


app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})
