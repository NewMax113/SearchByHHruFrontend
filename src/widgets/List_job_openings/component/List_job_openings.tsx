import React, { useEffect, useRef, useState } from 'react'
import style from '../style/style.module.scss'
import { useSelector, useDispatch } from 'react-redux'
import { pageMinus, pagePlus } from '../../Search_job_openings/model/redux/pages-reducer'
import { IRootState, AppDispatch } from '../../Parameters_job_openings/model/reducer'
import { VacancyMap } from './Vacancy'


export const List_job_openings = () => {
    let vacancies = useSelector<IRootState, any>(state => state.job_openingReducer.job_opening_Array)
    let pages = useSelector<IRootState, any>(state => state.pages.found)
    const dispatch: any = useDispatch<AppDispatch>()

    const minusPage = () => {
        dispatch(pageMinus())
    }

    const plusPage = () => {
        dispatch(pagePlus())
    }

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
            {/* <div classNameN{ame={style.list_job_openings}>
                {vacancies.length < 1
                    ? <div>Загрузка</div>
                    : vacancies[0].map((vacancy: any, index: number) => <VacancyMap vacancy={vacancy} />)}
            </div> */}

            <div className={'flex justify-center items-center justify-around p-4 text-sm'}>
                <div>
                    Вакансий: {pages}
                </div>
                <div className="flex justify-center items-center justify-around text-sm whitespace-nowrap">
                    <label htmlFor="vacancy" className="block">Показать вакансии:</label>
                    <select id="vacancy" name="vacancy"
                        className="w-2/6 border" required>
                        <option value="">Все</option>
                        <option value="read">Читал</option>
                        <option value="notRead">Не читал</option>
                    </select>
                </div>
            </div>


            <div className={'flex items-center p-1.5 justify-center'}>
                <div className={'cursor-pointer'}>
                    <div className={'text-4xl text-gray-400 hover:text-black'}
                        onClick={minusPage}>
                        ◀
                    </div>
                </div>
                <div className={"max-w-screen-xl p-8"}>

                    <div className={"sm:grid lg:grid-cols-3 sm:grid-cols-2 gap-10"}>

                        {vacancies.length < 1
                            ? <div>Загрузка</div>
                            : vacancies[0].map((vacancy: any, index: number) => <VacancyMap vacancy={vacancy.vacancy} employer={vacancy.employer} />)}
                    </div>
                </div>
                <div className={'text-4xl cursor-pointer text-gray-400 hover:text-black'}
                    onClick={plusPage}>
                    ▶</div>
            </div>
        </>
    )
}