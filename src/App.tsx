import React, {useReducer} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';
import {InputIndependent} from "./components/InputIndependent";
import ButtonAppBar from "./components/ButtonAppBar";
import {Container, Grid, Paper} from "@material-ui/core";
import {
    addEmptyTasksAC,
    addTaskAC,
    changeStatusAC,
    removeTaskAC,
    TaskReducer,
    updateTaskAC
} from "./reducers/TaskReducer";
import {
    addTodolistAC,
    changeFilterAC,
    removeTodolistAC,
    TodoListReducer,
    updateTodoListAC
} from "./reducers/TodoListReducer";

export type FilterValuesType = "all" | "active" | "completed";
export type TodolistType = {
    id: string
    title: string
    filter: FilterValuesType
}
export type TasksStateType = {
    [key: string]: Array<TaskType>
}


function App() {

    let todolistId1 = v1();
    let todolistId2 = v1();

    let [todolists, todolistsDispatch] = useReducer(TodoListReducer, [
        {id: todolistId1, title: "What to learn", filter: "all"},
        {id: todolistId2, title: "What to buy", filter: "all"}
    ])

    let [tasks, tasksDispatch] = useReducer(TaskReducer, {
        [todolistId1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "JS", isDone: false},
            {id: v1(), title: "JS", isDone: false},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "JS", isDone: false}
        ],
        [todolistId2]: [
            {id: v1(), title: "Milk", isDone: true},
            {id: v1(), title: "React Book", isDone: false},
            {id: v1(), title: "React Book", isDone: true},
            {id: v1(), title: "React Book", isDone: false},
            {id: v1(), title: "React Book", isDone: true}
        ]
    });

    function removeTask(id: string, todolistId: string) {
        tasksDispatch(removeTaskAC(id, todolistId))
    }
    function addTask(title: string, todolistId: string) {
/*        let task = {id: v1(), title: title, isDone: false};
        let todolistTasks = tasks[todolistId];*/
        tasksDispatch(addTaskAC(title, todolistId))
    }

    function addTodoList(title: string) {
        let newID = v1()
        todolistsDispatch(addTodolistAC(title, newID))
        tasksDispatch(addEmptyTasksAC(newID))
    }

    function changeStatus(id: string, isDone: boolean, todolistId: string) {
        tasksDispatch(changeStatusAC(id, isDone, todolistId))
    }
    function changeFilter(value: FilterValuesType, todolistId: string) {
        todolistsDispatch(changeFilterAC(value, todolistId))
    }

    function removeTodolist(id: string) {
        todolistsDispatch(removeTodolistAC(id))
        delete tasks[id]
        // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
        // setTasks({...tasks});
    }

    const updateTask = (todolistId: string, taskId: string, title: string) => {
        tasksDispatch(updateTaskAC(todolistId, taskId, title))
    }
    const updateTodoList = (todolistId: string, title: string) => {
        todolistsDispatch(updateTodoListAC(todolistId, title))
    }

    return (
        <div className="App">
            <ButtonAppBar/>
            <Container fixed>
                <Grid container style={{padding: '20px'}}>
                    <InputIndependent callback={(title) => addTodoList(title)}/>
                </Grid>
                <Grid container spacing={3}>
                    {
                        todolists.map(tl => {
                            let allTodolistTasks = tasks[tl.id];
                            let tasksForTodolist = allTodolistTasks;

                            if (tl.filter === "active") {
                                tasksForTodolist = allTodolistTasks.filter(t => !t.isDone);
                            }
                            if (tl.filter === "completed") {
                                tasksForTodolist = allTodolistTasks.filter(t => t.isDone);
                            }

                            return <Grid item>
                                <Paper style={{padding: '10px'}}>
                                    <Todolist
                                        key={tl.id}
                                        id={tl.id}
                                        title={tl.title}
                                        tasks={tasksForTodolist}
                                        removeTask={removeTask}
                                        changeFilter={changeFilter}
                                        addTask={addTask}
                                        changeTaskStatus={changeStatus}
                                        filter={tl.filter}
                                        removeTodolist={removeTodolist}
                                        updateTask={updateTask}
                                        updateTodoList={updateTodoList}
                                    />
                                </Paper>
                            </Grid>
                        })
                    }
                </Grid>
            </Container>
        </div>
    );
}

export default App;
