import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IObj } from '../components/App';


export const currenciesApi = createApi({
    reducerPath: 'currenciesApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://api.coinbase.com/v2/currencies/' }),
    endpoints: (builder) => ({
      getCurencu: builder.query<IObj, string>({
        query: () => ``,
      }),
    }),
  })

  export const {useGetCurencuQuery} = currenciesApi;