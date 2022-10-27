import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = {
  todo: [],
}

export const addTodo = createAction('TODO')

export default createReducer(initialState, {
  [addTodo]: function (state) {
    //state.todo = state.todo + 1
  },
})