import { configureStore } from '@reduxjs/toolkit';
import sortReducer from './features/sort/sortReducder'

export default configureStore({
  reducer: {
    sortReducer
  },
})