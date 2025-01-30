import { createSlice } from '@reduxjs/toolkit';

const emptySlice = createSlice({
	name: 'empty',
	initialState: {},
	reducers: {},
});

export default emptySlice.reducer;
