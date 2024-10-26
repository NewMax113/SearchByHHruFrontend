import { configureStore, combineReducers } from "@reduxjs/toolkit"
import params from "./params-reducer"
import jobOpeningReducer from "../../search-job-openings/model/job-opening-reducer"
import pagesReducer from "../../search-job-openings/model/redux/pages-reducer"


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
