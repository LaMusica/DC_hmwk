const express = require('express');
const app = express();
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');

app.use(cors());

app.use(express.json());

let todos = [];


app.get('/todos', (req,res) => {
    res.json(todos); 
})

app.post('/todos', (req,res) => {
    const title = req.body.title;
    const priority = req.body.priority;
    const dateCreated = req.body.dateCreated;

    if(title != null && priority != null && dateCreated != null ) {
        let task = {taskId:uuidv4(), title:title, priority:priority, dateCreated: dateCreated}
        todos.push(task);
        res.json({success:true})
    }

    else {
        res.json({success: false, errorMessage: "Unable to add task"})
    }

})


app.delete('./todos/:taskId', (req,res) => {
    let taskId = req.params.taskId;
    todos = todos.filter(todo => {
        return  todo.taskId != taskId
    })
    res.json({success:true});
})

app.listen(3000, ()=>{
    console.log("Server is running...")
})