import { configureStore } from '@reduxjs/toolkit';
import { TodoReducer } from '../features/todoSlicer';

export const TodoStore = configureStore({
    reducer: {
        Todos: TodoReducer,
    }
});