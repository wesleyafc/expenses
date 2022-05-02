import { api_url } from '../ultils/api_url'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: api_url }),
    endpoints: builder => ({
        getCategories: builder.query({
            query: () => '/api/categories',
            providesTags: ['categories']
        }),

        getLabels: builder.query({
            query: () => '/api/labels',
            providesTags: ['transaction']


        }),

        addTransaction: builder.mutation({
            query: (initialTransaction) => ({
                url: '/api/transaction',
                method: 'POST',
                body: initialTransaction,
            }),
            invalidatesTags: ['transaction']
        }),

        deleteTransaction: builder.mutation({
            query: (TransactionID) => ({
                url: '/api/transaction',
                method: 'DELETE',
                body: TransactionID

            }),
            invalidatesTags: ['transaction']

        })
    })
})

export default apiSlice