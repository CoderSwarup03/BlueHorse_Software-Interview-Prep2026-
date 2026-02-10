import React, { createContext, useContext, useEffect, useState } from 'react'
const todoContext = createContext();
export const useTodo = () => useContext(todoContext);

const TodoProvider = ({ children }) => {
    // const [todos,setTodos] = useState([]);
    
    const [todos, setTodos] = useState(() => {
        const storedTodo = localStorage.getItem('todos');
        return storedTodo ? JSON.parse(storedTodo) : [];
    });

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])


    // addTodo
    const addTodo = (title) => {
        const newTodo = { id: Date.now(), title, completed: false };
        setTodos((prev) => [...prev, newTodo]);
    }

    const updateTodo = (id, title) => {
        // setTodos(todos.map((todo) => todo.id === id ? { ...todo, title } : todo))
        setTodos((prev) => prev.map((todo) => todo.id === id ? { ...todo, title } : todo))
    }

    const completedTodo = (id) => {
        // setTodos(todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
        setTodos((prev) => prev.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }

    const deleteTodo = (id) => {
        // setTodos((todos) => todos.filter((item) => item.id !== id))
        setTodos((prev) => prev.filter((todo) => todo.id !== id))
    }

    return (
        <todoContext.Provider value={{ todos, addTodo, completedTodo, updateTodo, deleteTodo }}>
            {children}
        </todoContext.Provider>
    )
}

export default TodoProvider