import store from './store';

export * from './index';
export * from './slice/exampleSlice';
export { default as store } from './store';

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch