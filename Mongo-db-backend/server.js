//Load env variables 
if(process.env.NODE_ENV != "production"){
    require('dotenv').config();

}


//Import dependencies 
const express = require ('express')
const cors = require("cors");
const connectToDb = require('./config/connectToDb');
const { findOneAndUpdate } = require('./models/todo');
const Todo = require("./models/todo")
const taskController = require("./controllers/taskController")


//Connect to database 
connectToDb();

// Create an express app
const app = express();


// configure an express app 
app.use(express.json());
app.use(cors());


//Routing 

app.get('/todos', taskController.fetchTasks);
app.get('/todos/:id', taskController.fetchTask);
app.post("/todos", taskController.createTask);
app.put('/todos/:id', taskController.updateTask)
app.delete('/todos/:id', taskController.deleteTask);




//Start our server
app.listen(process.env.PORT);