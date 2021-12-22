import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import {Input} from "./components/Input";
import {Button} from "./components/Button";
//
type TaskType = {
    id: string
    title: string
    isDone: boolean
}
type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (newTitle: string) => void
}
//
export function Todolist(props: PropsType) {
    const [title, setTitle] = useState('')
    //
    const onchangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }
    const onClickHandler = () => {
        props.addTask(title)
        setTitle('')
    }
    const onKeyPressHandler = (event: KeyboardEvent<HTMLInputElement>) => {
        // debugger
        console.log(event)
        if (event.key === '\n') {
            props.addTask(title)
            setTitle('')
        }
    }

    const changeFiltersHandler = (filterChange: FilterValuesType) => {
        props.changeFilter(filterChange)
    }

    const buttonDeleteTask = (taskId: string) => {
        props.removeTask(taskId)
    }
    return <div>
        <h3>{props.title}</h3>
        <div>
            <Input valueInput={title}
                   changeState={onchangeHandler}
                   keyPress={onKeyPressHandler}/>
            {/*<button onClick={onClickHandler}>+</button>*/}
            <Button name={'add'} callback={onClickHandler}/>
        </div>
        <ul>
            {
                props.tasks.map(t => <li key={t.id}>
                    <input type="checkbox" checked={t.isDone}/>
                    <span>{t.title}</span>
{/*                    <button onClick={() => buttonDeleteTask(t.id)}>x
                    </button>*/}
                    <Button name={'x'} callback={() => buttonDeleteTask(t.id)}/>
                </li>)
            }
        </ul>
        <div>
            <Button name={'All-2'} callback={()=>changeFiltersHandler('all')}/>
            <Button name={'Active-2'} callback={()=>changeFiltersHandler('active')}/>
            <Button name={'Completed-2'} callback={()=>changeFiltersHandler('completed')}/>

        </div>


    </div>
}
