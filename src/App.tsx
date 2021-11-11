import React from 'react';
import './App.css';
import TodoList from "./TodoList";

export type TaskType = {
    id: number
    title: string
    onDone: boolean
}

function App() {

    //BLL:
    const titleList_1 = 'What to learn'
    const titleList_2 = 'What to find'
    const titleList_3 = 'What to buy'

    const task_1: Array<TaskType> = [
        {id: 1, title: 'HTML&CSS', onDone: false},
        {id: 2, title: 'GIT', onDone: false},
        {id: 3, title: 'JS', onDone: true}
    ]
    const task_2: Array<TaskType> = [
        {id: 4, title: 'mentor', onDone: false},
        {id: 5, title: 'info about react', onDone: false},
        {id: 6, title: 'time', onDone: true}
    ]
    const task_3: Array<TaskType> = [
        {id: 7, title: 'notebook', onDone: false},
        {id: 8, title: 'headphones', onDone: false},
        {id: 9, title: 'a lot of coffee', onDone: true}
    ]

//UI:
    return (
        <div className="App">
            <TodoList title={titleList_1} tasks={task_1} />
            <TodoList title={titleList_2} tasks={task_2}/>
            <TodoList title={titleList_3} tasks={task_3}/>
        </div>
    );
}

export default App;
