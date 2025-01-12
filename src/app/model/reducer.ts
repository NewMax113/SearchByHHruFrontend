import { configureStore, combineReducers } from "@reduxjs/toolkit"
import params from "../../pages/model/parameters-reducer"
import jobOpeningReducer from "../../pages/model/job-opening-reducer"
import pagesReducer from '../../pages/model/pages-reducer'


let rootReducer = combineReducers({
    params: params,
    jobOpeningReducer: jobOpeningReducer,
    pages: pagesReducer
})

export let store = configureStore({
    reducer: rootReducer
})

export type IRootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof configureStore>
export type AppDispatch = AppStore['dispatch']
