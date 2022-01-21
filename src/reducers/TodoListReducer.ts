import {FilterValuesType, TodolistType} from "../App";

export const TodoListReducer = (state: TodolistType[], action: GeneralType) => {
    switch (action.type) {
        case "ADD-TODOLIST": {
            return state
        }
        case "REMOVE-TODOLIST": {
            return state
        }
        case "CHANGE-FILTER": {
            return state
        }
        case "UPDATE_TODOLIST":{
            return  state
        }
        default:
            return state
    }
}

type GeneralType = addTodolistACType
    | removeTodolistACType
    | changeFilterACType
    | updateTodoListACType

type addTodolistACType = ReturnType<typeof addTodolistAC>
export const addTodolistAC = (title: string) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {title}
    } as const
}

type removeTodolistACType = ReturnType<typeof removeTodolistAC>
export const removeTodolistAC = (id: string) => {
    return {
        type: 'REMOVE-TODOLIST',
        payload: {id}
    } as const
}

type changeFilterACType = ReturnType<typeof changeFilterAC>
export const changeFilterAC = (value: FilterValuesType, todolistId: string) => {
    return {
        type: 'CHANGE-FILTER',
        payload: {value, todolistId}
    } as const
}
type updateTodoListACType = ReturnType<typeof updateTodoListAC>
export const updateTodoListAC = (todolistId: string, title: string) => {
    return {
        type: 'UPDATE_TODOLIST',
        payload: {todolistId, title}
    } as const
}