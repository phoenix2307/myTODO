import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType} from './App';
import {Button} from "./components/Button";
import {EditableSpan} from "./components/EditableSpan";
import {InputIndependent} from "./components/InputIndependent";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    removeTodolist: (id: string) => void
    filter: FilterValuesType
    updateTask: (todolistId: string, taskId: string, title: string) => void
    updateTodoList: (todolistId: string, title: string) => void
}

export function Todolist(props: PropsType) {

    const removeTodolist = () => props.removeTodolist(props.id)

    const onAllClickHandler = () => props.changeFilter("all", props.id);
    const onActiveClickHandler = () => props.changeFilter("active", props.id);
    const onCompletedClickHandler = () => props.changeFilter("completed", props.id);

    const onClickHandler = (taskID: string) => props.removeTask(taskID, props.id)

    const onChangeHandlerCheckBox = (e: ChangeEvent<HTMLInputElement>, taskID: string) => {
        let newIsDoneValue = e.currentTarget.checked;
        props.changeTaskStatus(taskID, newIsDoneValue, props.id);
    }

    const updateTaskEditable = (taskId: string, title: string) => {
        props.updateTask(props.id, taskId, title)
    }

    const updateTodoListHandler = (title: string) => {
        props.updateTodoList(props.id, title)
    }

    const callbackHandler = (title: string) => {
        props.addTask(title, props.id)
    }

    return <div>

        <h3>
            <EditableSpan title={props.title} addItem={(title) => updateTodoListHandler(title)}/>
            <button onClick={removeTodolist}>x</button>
        </h3>
        <InputIndependent callback={(title) => callbackHandler(title)}/>
        <ul>
            {
                props.tasks.map(t => {
                    return <li key={t.id} className={t.isDone ? "is-done" : ""}>

                        <input type="checkbox"
                               onChange={(e) => onChangeHandlerCheckBox(e, t.id)}
                               checked={t.isDone}/>
                        <EditableSpan title={t.title} addItem={(title) => updateTaskEditable(t.id, title)}/>
                        <Button callback={() => onClickHandler(t.id)} name={'x'}/>
                    </li>
                })
            }
        </ul>
        <div>
            <button className={props.filter === 'all' ? "active-filter" : ""}
                    onClick={onAllClickHandler}>All
            </button>
            <button className={props.filter === 'active' ? "active-filter" : ""}
                    onClick={onActiveClickHandler}>Active
            </button>
            <button className={props.filter === 'completed' ? "active-filter" : ""}
                    onClick={onCompletedClickHandler}>Completed
            </button>
        </div>
    </div>
}


