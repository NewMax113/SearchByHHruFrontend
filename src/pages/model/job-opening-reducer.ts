import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"
import { IJob_opening_Array } from "../type/TypeJobOpening"
import initialState from "../config/initialStateJobOpening"


let jobOpeningReducer = createSlice({
    name: 'paramsSearch',
    initialState,
    reducers: {
        setListVacancies(state, action: PayloadAction<IJob_opening_Array[]>) {
            state.job_opening_Array = [...action.payload]
        },
        setTextRedux(state, action: PayloadAction<string>) {
            state.text = action.payload
        }
    },

})

export default jobOpeningReducer.reducer
export const { setListVacancies, setTextRedux } = jobOpeningReducer.actions
