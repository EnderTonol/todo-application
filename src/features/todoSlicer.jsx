import { createSlice } from "@reduxjs/toolkit";
const initialState = []

export const todoSlicer = createSlice({
    name: "Todos",
    initialState,
    reducers: {
        insertTodo: (_state,action)=>{
            _state = [ action.payload, ..._state ];
        },
        deleteTodo: (_state,action)=>{
            _state.splice(action.payload, 1);
        },
        editTodo: (_state,action)=>{
            const updatedTodo = prompt("Edit your Todo", _state[action.payload]);
            if(updatedTodo !== null && updatedTodo !== _sta)
        }
    }
})