const express = require('express');
const app = express()
const cors = require('cors')
const PORT = 8080

app.use(cors())

let cars = {
    'Mercedes': { 
        model: 'A-Class',
        Make: 'Mercedes-Benz',
        Years: '2022',
    
    },
    'Audi': {
        model: 'A3',
        Make: 'Audi',
        Years: '2023',
    },
    'Unknown': {
        model: 'Unknown',
        Make: 'Unknown',
        years: 'Unknown'
    },
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/cars/:carsName', (request, response)=>{
    const carsName = request.params.carsName.toLowerCase()
    console.log(carsName)
    if(cars[carName]){
        response.json(cars[carsName])
    } else{
        response.json(cars)
    }
    
})


app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})
