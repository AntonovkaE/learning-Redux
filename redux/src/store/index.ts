import {configureStore} from '@reduxjs/toolkit';
import { gitHubApi } from './github.api';
export const store = configureStore({
  reducer: {
    [gitHubApi.reducerPath]: gitHubApi.reducer
  }
})