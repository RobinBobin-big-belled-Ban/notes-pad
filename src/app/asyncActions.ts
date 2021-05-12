import { createAsyncThunk } from '@reduxjs/toolkit';
import { SingleTask } from './appSlice'
import db from '../DataBase'
import { addTask, loadTasks, deleteTask, updateTask } from './appSlice'

export const addTaskAsync = createAsyncThunk(
    'app/addTaskAsync',
    async (task: SingleTask, thunkAPI) => {
      try {
          await db.table('tasks').add(task)
          thunkAPI.dispatch(addTask(task))
      } catch (err) {
          console.log(err)
      }
    }
);

export const loadTaskAsync = createAsyncThunk(
    'app/loadTaskAsync',
    async (_, thunkAPI) => {
      try {
          const datas = await db.table('tasks').toArray()
          thunkAPI.dispatch(loadTasks(datas))
      } catch (err) {
          console.log(err)
      }
    }
);

export const deleteTaskAsync = createAsyncThunk(
    'app/deleteTaskAsync',
    async (id: string, thunkAPI) => {
      try {
          console.log(id)
          await db.table('tasks').delete(id)
          thunkAPI.dispatch(deleteTask(id))
      } catch (err) {
          console.log(err)
      }
    }
);

export const updateTaskAsync = createAsyncThunk(
    'app/updateTaskAsync',
    async (task: SingleTask, thunkAPI) => {
      try {
          const {id, ...other} = task
          await db.table('tasks').update(id, other)
          thunkAPI.dispatch(updateTask(task))
      } catch (err) {
          console.log(err)
      }
    }
);