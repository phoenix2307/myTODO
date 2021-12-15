import React from "react";

type TestingPropsType = {
    id: number
    value: string
    status: boolean
}
export function Testing (props: TestingPropsType) {
    return (
        <div>
            <h1> my number {props.id}, my value is {props.value}</h1>
        </div>
/*        console.log(props.id)
        console.log(props.value)*/
    )

}
type Test2PropsType = {
    age: number
}
export function Test2 (props: Test2PropsType) {
    return (
        <div>
            <h1> I have {props.age} years</h1>
        </div>
    )
}