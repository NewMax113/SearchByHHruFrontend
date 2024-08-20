import React, { useEffect, useRef, useState } from 'react'
import style from '../style/style.module.scss'
import { useSelector } from 'react-redux'
import { IRootState } from '../../Parameters_job_openings/model/reducer'
import { VacancyMap } from './Vacancy'



export const List_job_openings = () => {
    let vacancies = useSelector<IRootState, any>(state => state.job_openingReducer.job_opening_Array)

    // let [scroll, setScroll] = useState(0) //позиция скролла
    // useEffect(() => {
    //     const handleOnScroll = () => {
    //         setScroll(window.scrollY);
    //     };
    //     window.addEventListener("scroll", handleOnScroll);
    // }, [])
    // useEffect(() => {
    //     console.log(scroll)
    // }, [scroll])

    return (
        <>
            {/* <div>{vacancies[0] && <>Найдено: {vacancies[0].length} вакансий</>}</div> */}
            <div className={style.list_job_openings}>
                {vacancies.length < 1
                    ? <div>Загрузка</div>
                    : vacancies[0].map((vacancy: any, index: number) => <VacancyMap vacancy={vacancy} />)}
            </div>
        </>

    )
}