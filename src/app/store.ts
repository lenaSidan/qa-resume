import { configureStore } from '@reduxjs/toolkit';
import emptyReducer from './slices/emptySlice';

export const store = configureStore({
	reducer: {
		empty: emptyReducer, // Здесь хотя бы один редюсер
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
