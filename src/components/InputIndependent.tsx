import React, {ChangeEvent, KeyboardEvent, useState} from "react";
import {Button, TextField} from "@material-ui/core";

type PropsType = {
    callback: (title: string) => void
}

export const InputIndependent = (props: PropsType) => {
    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addTask = () => {
        let newTitle = title.trim();
        if (newTitle !== "") {
            props.callback(newTitle);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addTask();
        }
    }

    return (
        <div>
            <TextField id="outlined-basic"
                       label={!!error ? 'Title is required' : 'add item'}
                       variant="outlined"
                       size={'small'}
                       error={!!error}
                       value={title}
                       onChange={onChangeHandler}
                       onKeyPress={onKeyPressHandler}
                       className={error ? "error" : ""}
            />
            {/*<input value={title}*/}
            {/*       onChange={(e) => onChangeHandler(e)}*/}
            {/*       onKeyPress={(e) => onKeyPressHandler(e)}*/}
            {/*       className={error ? "error" : ""}*/}
            {/*/>*/}
            {/*<button onClick={addTask}>+</button>*/}
            <Button
                variant="contained"
                onClick={addTask}
                size={'small'}
                color={'primary'}
                style={{maxWidth: '42px', maxHeight: '42px', minWidth: '42px', minHeight: '42px',}}>+</Button>
            {/*{error && <div className="error-message">{error}</div>}*/}
        </div>

    )

}