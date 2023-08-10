import { configureStore } from '@reduxjs/toolkit';
import drumMachineReducer from './reducers/drumMachineReducer';

const store = configureStore({
  reducer: drumMachineReducer,
});

export default store;
