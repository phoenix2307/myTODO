import React, {ChangeEvent, useState} from "react";

type PropsType = {
    title: string
    addItem: (title: string) => void
}

export const EditableSpan = (props: PropsType) => {
    let [title, setTitle] = useState(props.title)
    const [edit, setEdit] = useState(false)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onClickHandler = () => {
        setEdit(true)
    }
    const onBlurHandler = ()=> {
        setEdit(false)
        props.addItem(title)
    }
    return (
        edit
        ? <input value={title} autoFocus onBlur={onBlurHandler} onChange={onChangeHandler}/>
        : <span onDoubleClick={onClickHandler}>{props.title}</span>
    )
}