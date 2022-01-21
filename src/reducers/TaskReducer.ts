export const TaskReducer = (state: any, action: GeneralType) => {
    switch (action.type) {
        case "ADD-TASK": {
            return state
        }
        case "REMOVE-TASK": {
            return state
        }
        case "CHANGE-STATUS": {
            return state
        }
        case "UPDATE-TASK":{
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

type addTaskACType = ReturnType<typeof addTaskAC>
export const addTaskAC = (id: string, todolistId: string) => {
    return {
        type: 'ADD-TASK',
        payload: {id, todolistId}
    } as const
}
type removeTaskACType = ReturnType<typeof removeTaskAC>
export const removeTaskAC = (title: string, todolistId: string) => {
    return {
        type: 'REMOVE-TASK',
        payload: {title, todolistId}
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