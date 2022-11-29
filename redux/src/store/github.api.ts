import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const gitHubApi = createApi({
  reducerPath: 'gitHub/api',
  baseQuery: fetchBaseQuery( {
    baseUrl: 'https://api.gitHub.com/'
  }),
  endpoints: build => ({
    searchUsers: build.query<any, string>({
      query: (search: string) => ({
        url: `serch/users`,
        params: {
          q: search
        }
      })
    })
  }) 
})

export const {useSearchUsersQuery} = gitHubApi;