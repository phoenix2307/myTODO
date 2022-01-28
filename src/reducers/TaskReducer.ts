import {TasksStateType} from "../App";
import {v1} from "uuid";

export const TaskReducer = (state: TasksStateType, action: GeneralType) => {
    switch (action.type) {
        case "ADD-TASK": {
            let task = {id: v1(), title: action.payload.title, isDone: false};
            state[action.payload.todolistId] = [task, ...state[action.payload.todolistId]]
            return {...state}
        }
        case "REMOVE-TASK": {
            let todolistTasks = state[action.payload.todolistId];
            state[action.payload.todolistId] = todolistTasks.filter(t => t.id !== action.payload.id);
            return {...state}
        }
        case "CHANGE-STATUS": {
            state[action.payload.todolistId] = state[action.payload.todolistId].map(m =>
                m.id === action.payload.id
                    ? {...m, isDone: action.payload.isDone}
                    : m)
            return {...state}
        }
        case "UPDATE-TASK": {
            state[action.payload.todolistId] = state[action.payload.todolistId].map(m =>
                m.id === action.payload.taskId
                    ? {...m, title: action.payload.title}
                    : m)
            return {...state}
        }
        case "EMPTY-TASK": {
            state = {[action.payload.todolistId]: [], ...state}
            return state
        }
        default:
            return state
    }
}

type GeneralType = addTaskACType
    | removeTaskACType
    | changeStatusACType
    | updateTaskACType
    | addEmptyTasksACType

type addTaskACType = ReturnType<typeof addTaskAC>
export const addTaskAC = (title: string, todolistId: string) => {
    return {
        type: 'ADD-TASK',
        payload: {title, todolistId}
    } as const
}
type removeTaskACType = ReturnType<typeof removeTaskAC>
export const removeTaskAC = (id: string, todolistId: string) => {
    return {
        type: 'REMOVE-TASK',
        payload: {id, todolistId}
    } as const
}

type changeStatusACType = ReturnType<typeof changeStatusAC>
export const changeStatusAC = (id: string, isDone: boolean, todolistId: string) => {
    return {
        type: 'CHANGE-STATUS',
        payload: {id, isDone, todolistId}
    } as const
}

type updateTaskACType = ReturnType<typeof updateTaskAC>
export const updateTaskAC = (todolistId: string, taskId: string, title: string) => {
    return {
        type: 'UPDATE-TASK',
        payload: {todolistId, taskId, title}
    } as const
}

type addEmptyTasksACType = ReturnType<typeof addEmptyTasksAC>
export const addEmptyTasksAC = (todolistId: string) => {
    return {
        type: 'EMPTY-TASK',
        payload: {
            todolistId
        }
    } as const
}