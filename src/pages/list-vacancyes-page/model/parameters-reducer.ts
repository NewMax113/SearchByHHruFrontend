import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"
import { IinitialStateParameters } from "../type/TypeParameters"
import initialState from '../config/initialStateParams'


let params = createSlice({
    name: 'paramsSearch',
    initialState,
    reducers: {
        setListCities(state, action: PayloadAction<IinitialStateParameters['listCities']>) {
            state.listCities = action.payload
        },
        setCountryRedux(state, action: PayloadAction<IinitialStateParameters['country']>) {
            state.country = { id: action.payload.id, country: action.payload.country }
        },
        setCityRedux(state, action: PayloadAction<IinitialStateParameters['city']>) {
            state.city = { id: action.payload.id, city: action.payload.city }
        },
        setEarningRedux(state, action: PayloadAction<IinitialStateParameters['salary']>) {
            state.salary = action.payload
        },
        setWorkExperienceRedux(state, action: PayloadAction<IinitialStateParameters['experience']>) {
            state.experience = action.payload
        },
        setWorkScheduleRedux(state, action: PayloadAction<IinitialStateParameters['schedule']>) {
            state.schedule = action.payload
        },
        setBodyRequest(state) {
            state.requestBody.area = state.city.id || state.country.id
            if (state.salary) {
                state.requestBody.salary = state.salary
                state.requestBody.only_with_salary = true
            } else {
                let { salary, ...rest } = state.requestBody;
                state.requestBody = rest
                state.requestBody.only_with_salary = false
            }
            if (state.experience) {
                state.requestBody.experience = state.experience
            }
            if (state.schedule.length === 0) {
                let { schedule, ...rest } = state.requestBody;
                state.requestBody = rest
            } else {
                state.requestBody.schedule = state.schedule
            }
        },
        resetBodyRequest(state) {
            Object.assign(state, initialState);
        },
    },
})


export default params.reducer
export const {
    setListCities,
    setCountryRedux,
    setCityRedux,
    setEarningRedux,
    setWorkExperienceRedux,
    setWorkScheduleRedux,
    setBodyRequest,
    resetBodyRequest
} = params.actions
