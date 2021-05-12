import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from './store';
import { loadTaskAsync } from './asyncActions'

export interface SingleTask {
    id: string;
    name: string;
    description: string;
}

export interface AppState {
  tasks: SingleTask[];
  status: 'idle' | 'loading' | 'failed';
}

const initialState: AppState = {
    tasks: [],
    status: 'idle',
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    addTask: (state, action) => {
        state.tasks = [...state.tasks, action.payload]
    },
    loadTasks: (state, action) => {
        state.tasks = action.payload
    },
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(elem => elem.id != action.payload)
    },
    updateTask: (state, action) => {
        const updatedArray = state.tasks.map(elem => {
          if (elem.id === action.payload.id) return action.payload
          return elem
        })
        state.tasks = updatedArray
    }
  },
});

export const { addTask, loadTasks, deleteTask, updateTask } = appSlice.actions;

export default appSlice.reducer;
