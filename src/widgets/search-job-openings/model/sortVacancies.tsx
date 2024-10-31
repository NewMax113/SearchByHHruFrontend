import React, { useState } from 'react'
import { getElementEmployer } from './getElementEmployer'
import { getElementVacancy } from './getElementVacancy'

export const sortVacancies = async (vacancies: any) => {
    const start = performance.now();
    let vacanciesMap = await Promise.all(vacancies.items.map(async (vacancy: any, index: number) => {
        return {
            vacancy: await getElementVacancy(vacancy.id),
            employer: await getElementEmployer(vacancy.employer.id)
        }
    }))
    const end = performance.now();

    console.log('vacanciesMap:', vacanciesMap)
    return [vacanciesMap, vacancies.pages]
}

//     //вариант решения 2
// for (let index = 0; index < vacancies.items.length; index++) {
//     vacanciesArray.push(
//         {
//             vacancy: await getElementVacancy(vacancies.items[index].id),
//             employer: await getElementEmployer(vacancies.items[index].employer.id)
//         }
//     )
// }
// console.log(vacanciesArray)
// return vacanciesArray