const express = require("express")
const mongoose = require("mongoose")

const app = express();
app.use(express.json())
const SERVER_PORT = process.env.PORT || 5000;

const db = "mongodb://localhost:27017/todo"

mongoose.connect(db, ({useNewUrlParser: true})).then(console.log("connected to mongodb")).catch(err => console.log(err) )

const taskSchema = new mongoose.Schema({
    title: String,
    complete:{
        type: Boolean,
        default: false
    }
})
 const Task = mongoose.model("todo", taskSchema)


app.get("/todos", (req,res)=> {
    Task.find().then(todo=> res.json(todo))
})

app.post("/todos", (req,res) => {
    const newTask = new Task({
        title: req.body.title
    })
    newTask.save().then(todo => res.json(todo))
})
app.delete("/todos/:id", (req,res)=> {
    Task.findByIdAndDelete(req.params.id)
    .then(() => res.json({remove: true }))
})

app.listen(5000, ()=>{
    console.log("server is running at port 5000")
})