import {configureStore} from '@reduxjs/toolkit';
import { gitHubApi } from './github.api';
import { githubReducer } from './github.slice';


export const store = configureStore({
  reducer: {
    [gitHubApi.reducerPath]: gitHubApi.reducer,
    github: githubReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(gitHubApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>;
