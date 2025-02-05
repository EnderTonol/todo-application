import { createSlice } from "@reduxjs/toolkit";
const initialState = []

export const todoSlicer = createSlice({
    name: "Tasks",
    initialState,
    reducers: {
        insertTodo: (_state,action)=>{
            if(action.payload.trim() !== ""){
            const newTodo = {
                id: Date.now(),
                text: action.payload,
                done: false,
              }
              _state.push(newTodo)
            }else{
                alert("Input is Empty.")
            }
        },
        deleteTodo: (_state,action)=>{
            _state.splice(action.payload, 1);
        },
        editTodo: (_state,action)=>{
            const updatedTodo = prompt("Edit your Todo", _state[action.payload].text);
            if(updatedTodo !== null && updatedTodo.trim() !== ""){
               _state[action.payload].text = updatedTodo;
            }
        },
        toggleDone: (_state,action)=>{
            const Tds = _state.find((itm)=> itm.id == action.payload);
            if(Tds){
                Tds.done = !Tds.done
            }
        }
    }
});

export const { insertTodo,deleteTodo,editTodo,toggleDone } = todoSlicer.actions;
export const TodoReducer = todoSlicer.reducer;