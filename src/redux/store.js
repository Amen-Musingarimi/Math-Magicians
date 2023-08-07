import { configureStore } from '@reduxjs/toolkit';
import SideBarReducer from './sideBarSlice';

const store = configureStore({
  reducer: {
    nav: SideBarReducer,
  },
});

export default store;
