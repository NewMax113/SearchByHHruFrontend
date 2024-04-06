import { createAsyncThunk } from '@reduxjs/toolkit'
import { getElementEmployer } from './getElementEmployer'
import { getElementVacancy } from './getElementVacancy'

export const newObjectVacancyThunk = createAsyncThunk(
    'name',
    async (vacancies: any) => {
        try {
            console.log('Отработал Thunk', vacancies)
            let vacanciesArray: any[] = []
            //  let vacanciesMap = await vacancies.items.map(async (vacancy: any, index: number) => {
            //     vacanciesArray.push(
            //         {
            //             vacancy: await{...getElementVacancy(vacancy.id)},
            //             employer: await{...getElementEmployer(vacancy.employer.id)}
            //         }
            //     )
            // })
            // console.log(vacanciesArray)
             return vacancies
        } catch (e) {
            console.log('Ошибка:', e)
        }
    }
)
