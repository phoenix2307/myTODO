import React from "react";
import {IconButton} from "@material-ui/core";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";

type PropsType = {
    callback: () => void
    name: string
}
export const ButtonIndependent = (props: PropsType) => {

    const onClickHandlerIndepandence = () => {
        props.callback()
    }

    return (
        <IconButton onClick={onClickHandlerIndepandence}>
            <HighlightOffIcon />
        </IconButton>
        // <button onClick={onClickHandlerIndepandence}>{props.name}</button>
    )
}
