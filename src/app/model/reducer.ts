import { configureStore, combineReducers } from "@reduxjs/toolkit"
import params from "../../pages/model/parameters-reducer"
import jobOpeningReducer from "../../pages/model/job-opening-reducer"
import pagesReducer from '../../pages/model/pages-reducer'
import { apiSlice } from "../../featrues/search-vacancy-feature/hooks/useFetchSearchResultsQuery"


let rootReducer = combineReducers({
    params: params,
    jobOpeningReducer: jobOpeningReducer,
    pages: pagesReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    //[apiSlice2.reducerPath]: apiSlice2.reducer,
})

export let store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
    //getDefaultMiddleware().concat(apiSlice2.middleware),
})

export type IRootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof configureStore>
export type AppDispatch = AppStore['dispatch']
