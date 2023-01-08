import { combineReducers, StateFromReducersMapObject } from '@reduxjs/toolkit';
import movies from './moviesReducer';
const reducers = { movies };
const rootReducer = combineReducers(reducers);
export type RootState = StateFromReducersMapObject<typeof reducers>;

export default rootReducer;
