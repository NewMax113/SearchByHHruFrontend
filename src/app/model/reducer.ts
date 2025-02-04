import { configureStore, combineReducers } from "@reduxjs/toolkit"
import params from "../../pages/list-vacancyes-page/model/parameters-reducer"
import jobOpeningReducer from "../../pages/list-vacancyes-page/model/job-opening-reducer"
import pagesReducer from '../../pages/list-vacancyes-page/model/pages-reducer'
import { apiSlice } from "../../featrues/search-vacancy-feature/hooks/useFetchSearchResultsQuery"


let rootReducer = combineReducers({
    params: params,
    jobOpeningReducer: jobOpeningReducer,
    pages: pagesReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
})

export let store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware),
})

export type IRootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof configureStore>
export type AppDispatch = AppStore['dispatch']
