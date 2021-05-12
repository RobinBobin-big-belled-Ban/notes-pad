import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Search {
    value: string;
}

const initialState: Search = {
    value: '',
}

export const headerSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        changeValue: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { changeValue } = headerSlice.actions;

export default headerSlice.reducer