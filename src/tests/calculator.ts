export const addition = (state: number, num: number): number => state + num
export const subtraction = (state: number, num: number): number => state - num
export const multiplication = (state: number, num: number): number => state * num
export const division = (state: number, num: number): number => state / num

export type GeneralActionType = AddActionType
    | SubActionType
    | MultiActionType
    | DivAddActionType


type AddActionType = {
    type: "ADDITION"
    num: number
}
type SubActionType = {
    type: "SUBTRACTION"
    num: number
}
type MultiActionType = {
    type: "MULTIPLICATION"
    num: number
}
type DivAddActionType = {
    type: "DIVISION"
    num: number
}
export const calculatorReducer = (state: number, action: GeneralActionType) => {
    switch (action.type) {
        case "ADDITION":
            return state + action.num
        case "SUBTRACTION":
            return state - action.num
        case "MULTIPLICATION":
            return state * action.num
        case "DIVISION":
            return state / action.num
        default:
            return state
    }
}