const Todo = require("../models/todo")



const fetchTasks = async (req, res) => {
    // Find the task
    const task = await Todo.find();
    // Responde with those task
    res.json({task: task});
}

const fetchTask = async (request, response) =>{
    // Get id off the url
    const taskId = request.params.id;

    // Find the note using that id
    const task = await Todo.findById(taskId)

    //Respond with the note 

    response.json({task: task})
}

const createTask = async (req, res) => {
    // Get the sent in data off request body
    const task = req.body.task;
    const body = req.body.body;

    // Create a note with it 
    const todo = await Todo.create({
        task: task,
        body: body,
    });
    // respond with the new note 
    res.json({task: task})
}

const updateTask = async (req, res) =>{
    // Get the id off the url
    const taskId = req.params.id

    //Get the data off the req body
    const task = req.body.task;
    const body = req.body.body;

    // Find and update the record 

    const tasks =  Todo.findByIdAndUpdate(taskId, { 
        task: task,
        body: body,
    
    });

    // Find updated note 
    const updatedtask = await Todo.findById(taskId);

    // Respond with it 
    res.json({ task: task});

}

const deleteTask = async (req, res) => {
    //get id off url 

    const taskId = req.params.id;


    //Delete the record 
    await Todo.deleteOne({ id: taskId})

    //Respond 
    res.json({sucess: "Record deleted"});

}

module.exports = {
    fetchTasks: fetchTasks,
    fetchTask: fetchTask,
    createTask: createTask,
    updateTask: updateTask,
    deleteTask : deleteTask,

}