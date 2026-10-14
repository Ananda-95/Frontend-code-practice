import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name:"todos",
  initialState :{
    items : []
  },
  reducers:{
    addTodo : {
      reducer : (state, action) => {
        state.items.push(action.payload)
      },
      prepare : (text) => ({
        payload : {
          id:nanoid(),
          text,
          completed:false
        }
      })

    },
    toggleTodo : (state, action) =>{
      const todo = state.items.find((item)=>(
        item.id === action.payload
      ))
      if(todo){
        todo.completed =!todo.completed
      }

    },
    deleteTodo : (state, action) => {
      state.items = state.items.filter((item) => (
        item.id !== action.payload
      ))

    }

  }
})

export const {addTodo, toggleTodo, deleteTodo} = todoSlice.actions

export default todoSlice.reducer