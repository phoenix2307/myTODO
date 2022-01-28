import {FilterValuesType, TodolistType} from "../App";

export const TodoListReducer = (state: TodolistType[], action: GeneralType) => {
    switch (action.type) {
        case "ADD-TODOLIST": {
            let newTodoList: TodolistType = {id: action.payload.newID, title: action.payload.title, filter: "all"}
            state = [newTodoList, ...state]
            return state
        }
        case "REMOVE-TODOLIST": {
            state = state.filter(f=> f.id !== action.payload.id)
            return state
        }
        case "CHANGE-FILTER": {
            let todolist = state.find(f=> f.id === action.payload.todolistId)
            if (todolist) {
                todolist.filter = action.payload.value
            }
            return [...state]
        }
        case "UPDATE_TODOLIST":{
            state = state.map(m=> m.id === action.payload.todolistId ? {...m, title: action.payload.title} : m)
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
export const addTodolistAC = (title: string, newID: string) => {
    return {
        type: 'ADD-TODOLIST',
        payload: {title, newID}
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