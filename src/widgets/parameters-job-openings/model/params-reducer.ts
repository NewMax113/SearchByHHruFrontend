import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"


interface IinitialState {
    requestBody: {
        area: string | number,
        salary?: string,
        experience?: string,
        schedule?: string[],
        only_with_salary: boolean
    },
    country: { id: number, country: string },
    city: { id: null | number, city: null | string },
    salary: string,
    experience: string,
    schedule: string[],
    listCities: { id: number, name: string }[],
}

let initialState: IinitialState = {
    requestBody: {
        area: '113',
        only_with_salary: false
    },
    country: { id: 113, country: 'Россия' },
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
        setListCities(state, action: PayloadAction<any>) {
            console.log(action.payload)
            state.listCities = action.payload
        },
        setCountryRedux(state, action: PayloadAction<any>) {
            state.country = { id: action.payload.id, country: action.payload.country }
        },
        setCityRedux(state, action: PayloadAction<any>) {
            state.city = { id: action.payload.id, city: action.payload.city }
        },
        setEarningRedux(state, action: PayloadAction<string>) {
            state.salary = action.payload
        },
        setWorkExperienceRedux(state, action: PayloadAction<string>) {
            state.experience = action.payload
        },
        setWorkScheduleRedux(state, action: PayloadAction<string[]>) {
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
    setBodyRequest
} = params.actions
