import { configureStore } from '@reduxjs/toolkit'
import { exampleReducer } from './slice/exampleSlice'

const store = configureStore({
   reducer: {
     exampleReducer: exampleReducer
   }
})

export default store