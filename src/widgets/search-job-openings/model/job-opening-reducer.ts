import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"


interface IVacancy {
    // id: number,
    // name: string,
    // workExperience: string, //опты работы
    // typeOfEemployment: string, //тип занятости
    // description: string,
    // salary: number,
    // city: string,
}

interface IEmployer {
    // id: number,
    // vacancies: number,
    // website: boolean,
    // trust?: number //доверие
}

interface IJob_opening_Array {
    vacancy: IVacancy,
    employer: IEmployer
}

interface IinitialState {
    job_opening_Array: IJob_opening_Array[]
}

let initialState: IinitialState = {
    job_opening_Array: []
}

let jobOpeningReducer = createSlice({
    name: 'paramsSearch',
    initialState,
    reducers: {
        setListVacancies(state, action: PayloadAction<any>) {
            console.log(action.payload)
            state.job_opening_Array = []
            state.job_opening_Array.push(action.payload)
        }
    },

})

export default jobOpeningReducer.reducer
export const { setListVacancies } = jobOpeningReducer.actions
