import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const todoSlice = createSlice({
  name: 'toolkit',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      const tasks = {
        id: nanoid(),
        text: action.payload,
        isCompleted: false,
      }
      console.log(tasks)
      state.todos.push(tasks)
    },
    
    removeTodo(state, action) {
      state.todos = state.todos.filter((task) => task.id !== action.payload)
    },

    toggleTask(state, action) {
      console.log(state.todos.map((task) => task.isCompleted))
      //const editTodo = state.todos.map((task) => task.isCompleted)
      //console.log(editTodo)
  
    },
  }
})

export default todoSlice.reducer
export const { addTodo, removeTodo, toggleTask } = todoSlice.actions