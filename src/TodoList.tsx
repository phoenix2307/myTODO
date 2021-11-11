import React from 'react';
import {TaskType} from "./App";

type TodoType = {
    title: string
    tasks: Array<TaskType>
}
function TodoList (props: TodoType) {
    return (
        <div className="App">
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input/>
                    <button>+</button>
                </div>
                <ul>
                    <li><input type="checkbox" checked={props.tasks[0].onDone}/> <span>{props.tasks[0].title}</span></li>
                    <li><input type="checkbox" checked={props.tasks[0].onDone}/> <span>{props.tasks[1].title}</span></li>
                    <li><input type="checkbox" checked={false}/> <span>{props.tasks[2].title}</span></li>
                </ul>
                <div>
                    <button>All</button>
                    <button>Active</button>
                    <button>Completed</button>
                </div>
            </div>
        </div>
    );
}

export default TodoList;
