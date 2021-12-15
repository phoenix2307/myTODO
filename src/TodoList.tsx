import React from "react";

type PropsType = {
    title: string
    task: Array<InArray>
    removeTask: (id: number) => void
    filteredTasks: (value: string) => void
}

type InArray = {
    id: number
    title: string
    isDone: boolean
}
export const Todolist = (props: PropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>
            <ul>
                {props.task.map((item, i) => {
                    // debugger
                    return (
                        <li key={item.id}>
                            <input type="checkbox" checked={item.isDone}/>
                            <span>{item.title}</span>
                            <button onClick={() => props.removeTask(item.id)}>x</button>
                        </li>
                    )
                })}
            </ul>
            <div>
                <button onClick={() => props.filteredTasks('All')}>All</button>
                <button onClick={() => props.filteredTasks('Active')}>Active</button>
                <button onClick={() => props.filteredTasks('Completed')}>Completed</button>
            </div>
        </div>
    )
}