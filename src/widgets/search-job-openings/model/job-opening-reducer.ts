import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"
import { newObjectVacancyThunk } from "./newObjectVacancy-thunk"

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
        getListVacancies(state, action: PayloadAction<any>) {
            console.log(action.payload)
            // let vacanciesMap = action.payload.items.map(async(vacancy: any, index: number) => {
            //     state.job_opening_Array.push(
            //         {
            //             vacancy: await getElementVacancy(vacancy.id),
            //             employer: await getElementEmployer(vacancy.employer.id)
            //         }
            //     )
            // })
            state.job_opening_Array = []
            state.job_opening_Array.push(action.payload)
        }
    },
    extraReducers: builder => {
        builder.addCase(newObjectVacancyThunk.fulfilled.type, (state, action: PayloadAction<any>) => {
            state.job_opening_Array = []
            state.job_opening_Array.push(action.payload)
            console.log(action.payload)
        });
    }
})

export default jobOpeningReducer.reducer
export const { getListVacancies } = jobOpeningReducer.actions
