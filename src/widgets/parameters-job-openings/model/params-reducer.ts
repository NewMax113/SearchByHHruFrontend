import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"


interface IinitialState {
    listCities: {country: {id: number, country: string}, cities:{id: number|null, name: string}[]},
    parameters: IObjectParams,
    parametersPresent: boolean
}

interface IWorkExperience {
    noExp: boolean,
    minExp: boolean,
    maxExp: boolean
}

interface IWorkSchedule {
    full: boolean,
    replaceable: boolean,
    remote: boolean
}


interface IObjectParams {
    country: {id: number, country: string},
    city: {id: null | number, city: string},
    earning: string,
    workExperience: IWorkExperience,
    workSchedule: IWorkSchedule,
    modification?: object
}

let initialState: IinitialState = {
    listCities: {country: {id: 113, country: 'Россия'}, cities: [{id: null, name: ''}]},
    parameters: {
        country: {id: 113, country: 'Россия'},
        city: {id: null, city: ''},
        earning: '',
        workExperience: { noExp: false, minExp: false, maxExp: false },
        workSchedule: { full: false, replaceable: false, remote: false, }, //полный, сменный, удаленный
    },
    parametersPresent: false
}

//поробовать сделать без case, напрямую выбор
let params = createSlice({
    name: 'paramsSearch',
    initialState,
    reducers: {
        setListCities(state, action:PayloadAction<{country: {id: number, country: string}, cities:{id: number|null, name: string}[]}>) {
            state.listCities = action.payload
        },
        setParametersRequest(state, action: PayloadAction<IObjectParams>) {
            state.parameters = action.payload
            state.parametersPresent = true
        },
        resetParameters(state) {
            state.parameters = {
                country: {id: 113, country: 'Россия'},
                city: {id: null, city: ''},
                earning: '',
                workExperience: { noExp: false, minExp: false, maxExp: false },
                workSchedule: { full: false, replaceable: false, remote: false, },
            }
            state.parametersPresent = false
        }
    },
})


export default params.reducer
export const { setListCities, setParametersRequest, resetParameters } = params.actions
