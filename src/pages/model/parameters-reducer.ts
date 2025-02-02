import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"
import { IinitialStateParameters } from "../type/TypeParameters"
import { area, country } from "../configuration"


let initialState: IinitialStateParameters = {
    requestBody: {
        area,
        only_with_salary: false
    },
    country,
    city: { id: null, city: null },
    listCities: [],
    salary: '',
    experience: '',
    schedule: [],
}

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
        setCityRedux(state, action: PayloadAction<any>) {
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
            state.requestBody.area = '113'
            state.requestBody.only_with_salary = false
            state.city = { id: null, city: null }
            state.country = { id: 113, country: 'Россия' }
            state.experience = ''
            state.salary = ''
            state.schedule = []
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
