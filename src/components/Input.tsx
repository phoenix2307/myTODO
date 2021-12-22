import React, {ChangeEvent, KeyboardEvent} from "react";

type InputPropsType = {
    valueInput: string
    changeState: (event: ChangeEvent<HTMLInputElement>) => void
    keyPress: (event: KeyboardEvent<HTMLInputElement>) => void
}

export const Input = (props: InputPropsType) => {
    return (
            <input value={props.valueInput}
                   onChange={props.changeState}
                   onKeyPress={props.keyPress}/>
    )
}