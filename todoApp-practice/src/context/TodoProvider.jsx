import React, { createContext, useContext, useState } from 'react'
const todoContext = createContext();
export const useTodo = () => useContext(todoContext);

const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    // addTodo
    const addTodo = (title) => {
        const newTodo = { id: Date.now(), title, completed: false };
        setTodos([...todos, newTodo])
    }

    const updateTodo = (id, title) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, title } : todo))
    }

    const completedTodo = (id) => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }

    return (
        <todoContext.Provider value={{ addTodo, completedTodo, updateTodo }}>
            {children}
        </todoContext.Provider>
    )
}

export default TodoProvider