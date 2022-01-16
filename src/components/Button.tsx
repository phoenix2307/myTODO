import React from "react";

type PropsType = {
    callback: () => void
    name: string
}
export const Button = (props: PropsType) => {

    const onClickHandlerIndepandence = () => {
        props.callback()
    }

    return (
        <button onClick={onClickHandlerIndepandence}>{props.name}</button>
    )
}
