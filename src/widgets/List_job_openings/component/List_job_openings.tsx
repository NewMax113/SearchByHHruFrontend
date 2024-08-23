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
            {/* <div classNameN{ame={style.list_job_openings}>
                {vacancies.length < 1
                    ? <div>Загрузка</div>
                    : vacancies[0].map((vacancy: any, index: number) => <VacancyMap vacancy={vacancy} />)}
            </div> */}

            <div className={'flex justify-center items-center justify-around p-4 text-sm'}>
                <div>
                    Вакансий: 100
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
                    <div className={'text-4xl text-gray-400 hover:text-black'}>
                        ◀
                    </div>
                </div>
                <div className={"max-w-screen-xl p-8"}>

                    <div className={"sm:grid lg:grid-cols-3 sm:grid-cols-2 gap-10"}>
                        <div className={"hover:bg-slate-300 transition duration-300 max-w-sm rounded overflow-hidden shadow-lg max-h-72 min-h-96"}>
                            <div className={"py-4 px-8 relative min-h-96"}>
                                <div className='max-h-80 overflow-hidden'>
                                    <div>Компания</div>
                                    <a href={"#"}>
                                        <h4 className={"text-base mb-3 font-semibold"}>How to be effective at working remotely?</h4>
                                    </a>
                                    <div className='text-xs'>Занятость</div>
                                    <div className='text-sm'>зп</div>
                                    <p className={"mb-2 text-sm text-gray-600 after:content[''] after:absolute after:w-full after:bottom-0 after:left-0 after:h-20 after:pointer-events-none after:bg-gradient-to-b after:from-transparent after:to-white"}>Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                    </p>
                                </div>

                                <div className='absolute bottom-px w-4/5'>
                                    <hr className={"mt-4 "}></hr>
                                    <button className={"text-xs"}>Открыть</button>
                                    &nbsp;
                                </div>
                            </div>
                        </div>
                        <div className={"hover:bg-gray-900 hover:text-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg max-h-72 min-h-96"}>
                            <div className={"py-4 px-8 relative min-h-96"}>
                                <div>Компания</div>
                                <a href={"#"}>
                                    <h4 className={"text-base mb-3 font-semibold"}>How to be effective at working remotely?</h4>
                                </a>
                                <p className={"mb-2 text-sm text-gray-600"}>Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                <div className='absolute bottom-px w-4/5'>
                                    <hr className={"mt-4 "}></hr>
                                    <button className={"text-xs hover:bg-blue-500"}>Открыть</button>
                                    &nbsp;
                                </div>
                            </div>
                        </div><div className={"hover:bg-gray-900 hover:text-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg max-h-72 min-h-96"}>
                            <div className={"py-4 px-8 relative min-h-96"}>
                                <div>Компания</div>
                                <a href={"#"}>
                                    <h4 className={"text-base mb-3 font-semibold"}>How to be effective at working remotely?</h4>
                                </a>
                                <p className={"mb-2 text-sm text-gray-600"}>Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                <div className='absolute bottom-px w-4/5'>
                                    <hr className={"mt-4 "}></hr>
                                    <button className={"text-xs"}>Открыть</button>
                                    &nbsp;
                                </div>
                            </div>
                        </div><div className={"hover:bg-gray-900 hover:text-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg max-h-72 min-h-96"}>
                            <div className={"py-4 px-8 relative min-h-96"}>
                                <div>Компания</div>
                                <a href={"#"}>
                                    <h4 className={"text-base mb-3 font-semibold"}>How to be effective at working remotely?</h4>
                                </a>
                                <p className={"mb-2 text-sm text-gray-600"}>Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                <div className='absolute bottom-px w-4/5'>
                                    <hr className={"mt-4 "}></hr>
                                    <button className={"text-xs"}>Открыть</button>
                                    &nbsp;
                                </div>
                            </div>
                        </div><div className={"hover:bg-gray-900 hover:text-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg max-h-72 min-h-96"}>
                            <div className={"py-4 px-8 relative min-h-96"}>
                                <div>Компания</div>
                                <a href={"#"}>
                                    <h4 className={"text-base mb-3 font-semibold"}>How to be effective at working remotely?</h4>
                                </a>
                                <p className={"mb-2 text-sm text-gray-600"}>Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                <div className='absolute bottom-px w-4/5'>
                                    <hr className={"mt-4 "}></hr>
                                    <button className={"text-xs"}>Открыть</button>
                                    &nbsp;
                                </div>
                            </div>
                        </div><div className={"hover:bg-gray-900 hover:text-white transition duration-300 max-w-sm rounded overflow-hidden shadow-lg max-h-72 min-h-96"}>
                            <div className={"py-4 px-8 relative min-h-96"}>
                                <div>Компания</div>
                                <a href={"#"}>
                                    <h4 className={"text-base mb-3 font-semibold"}>How to be effective at working remotely?</h4>
                                </a>
                                <div className='text-xs'>Занятость</div>
                                <div className='text-sm'>зп</div>
                                <p className={"mb-2 text-sm text-gray-600"}>Lorem Ipsum is simply dummy text of the printing and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                <div className='absolute bottom-px w-4/5'>
                                    <hr className={"mt-4 "}></hr>
                                    <button className={"text-xs"}>Открыть</button>
                                    &nbsp;
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'text-4xl cursor-pointer text-gray-400 hover:text-black'}>▶</div>
            </div>
        </>
    )
}