import React from 'react'
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid'; // Importing uuid for unique IDs
export default function TodoList(){
let [todos, setTodos] = useState([{task:"simple task", id:uuidv4(),isDone:false}]); // Initial state with a sample task
    let [newTodo, setNewTodo] = useState("");  
    let addNewTask = () => {
        setTodos((prevTodos)=>{
            return [...prevTodos, {task: newTodo, id: uuidv4()}]; // Spread operator to add new task
        }) // Add new task with unique ID
        setNewTodo(""); // Clear the input field after adding the task
    };
    let updateTodoValue=(event) => {
        setNewTodo(event.target.value);
    };
    let deleteTodo = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.id !== id); // Filter out the todo with the given ID
        });
    }
    let uppercaseAll = () => {
        setTodos((prevTodos) => {
            return prevTodos.map(todo => ({ ...todo, task: todo.task.toUpperCase() })); // Convert all tasks to uppercase
        });
    }
        let markAsDone = (id) => {
        setTodos((prevTodos) => {
            return prevTodos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, isDone:true };
                } else {
                    return todo;
                }
            });
        });
    };
     


    return (
        <div>
            <h4>Todo List</h4>
            <input placeholder="Add a new task" value={newTodo} onChange={updateTodoValue} />

            <br></br>
            <button onClick={addNewTask}>Add</button>
            <br></br>
            <br></br>
            <hr></hr>
            <h4>Tasks Todo</h4>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>
                        <span style={ todo.isDone ? { textDecorationLine: "line-through" } : {} }>
                        {todo.task}</span>
                        &nbsp;&nbsp;&nbsp;
                        <button onClick={()=>{
                            deleteTodo(todo.id); // Call deleteTodo with the task's ID
                        }}>remove</button>
                        {/* Button to remove the task */}
                        &nbsp;&nbsp;&nbsp;
                        {/* Button to convert the task to uppercase */}
                        <button onClick={() => markAsDone(todo.id)}>mark As Done</button>
                    </li>
                ))}
                <br></br>
                <button onClick={uppercaseAll}>Uppercase All</button>
            </ul>
        
        </div>
    )
}