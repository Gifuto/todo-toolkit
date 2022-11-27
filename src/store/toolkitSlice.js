import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const toolkitSlice = createSlice({
  name: 'toolkit',
  initialState: {
    todos: [],
  },
  reducers: {
    addTodo(state, action) {
      const tasks = {
        id: nanoid(),
        text: action.payload,
      }
      
      state.todos.push(tasks)
    },
    
    removeTodo(state, action) {
      state.todos = state.todos.filter((tasks) => tasks.id !== action.payload)
    },
  }
})


export default toolkitSlice.reducer
export const { addTodo, removeTodo } = toolkitSlice.actions