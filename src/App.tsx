import React, {useState} from 'react';
import './App.css';
import {Todolist} from "./TodoList";

function App() {

    const [tasks, setTasks] = useState([
        {id: 1, title: 'HTML&CSS', isDone: true},
        {id: 2, title: 'GIT', isDone: true},
        {id: 3, title: 'JS', isDone: false},
    ])
    let isDoneTrue = tasks.filter(f => f.isDone)

    const filteredTasks = (value: string) => {
        console.log(value)
    }

    const removeTask = (id: number) => {
        setTasks(tasks.filter(f => f.id !== id))
    }

//action
    return (
        <div className="App">
            <Todolist title={'What to learn'}
                      task={isDoneTrue}
                      removeTask={removeTask}
                      filteredTasks={filteredTasks}
            />
        </div>
    );
}

export default App;
