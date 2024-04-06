import { configureStore, combineReducers } from "@reduxjs/toolkit"
import params from "./params-reducer"
import job_openingReducer from "../../Search_job_openings/model/job_opening-reducer"


let rootReducer = combineReducers({
    params: params,
    job_openingReducer: job_openingReducer
})

export let store = configureStore({
    reducer: rootReducer
})

export type IRootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof configureStore>
export type AppDispatch = AppStore['dispatch']
