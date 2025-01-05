import { FC } from "react"

const VacancyModelEntity: FC<any> = ({
    window,
    vacancy,
    theObj,
    switchFetch,
    setWindow,
    saveResultVacancy,
    count,
    color
}) => {

    return (
        <div className={"flex relative max-w-sm shadow-lg max-h-72 min-h-96 hover:outline hover:outline-1 hover:outline-gray-400 "}>
            <div className={"py-4 px-8 relative min-h-96"}>
                <div className='max-h-80 overflow-hidden'>
                    <div>{vacancy.employer}</div>
                    <a href={"#"}>
                        <h4 className={"text-base mb-3 font-semibold"}><u>{vacancy.name}</u></h4>
                    </a>
                    <div className='flex'>
                        <div className='text-xs mr-4'>{vacancy.city}</div>
                        <div className='text-xs'>{vacancy.schedule}</div>
                    </div>

                    <div className='text-sm'>
                        {vacancy.salary !== null
                            ? (vacancy.salary.from !== null && vacancy.salary.to !== null
                                ? <div>От {vacancy.salary.from} до {vacancy.salary.to} {vacancy.salary.currency}</div>
                                : (vacancy.salary.from !== null
                                    ? <div>От {vacancy.salary.from} {vacancy.salary.currency}</div>
                                    : <div>До {vacancy.salary.to} {vacancy.salary.currency}</div>))
                            : <div>З/п не указана</div>}</div>
                    <p dangerouslySetInnerHTML={theObj} className={"mb-2 text-sm text-gray-600 after:content[''] after:absolute after:w-full after:bottom-0 after:left-0 after:h-20 after:pointer-events-none after:bg-gradient-to-b after:from-transparent after:to-white"}>

                    </p>
                </div>


                <div className='absolute bottom-px w-4/5'>
                    <hr className={"mt-4 "}></hr>
                    <button className={"text-xs"}>Открыть</button>
                    &nbsp;
                </div>
            </div>
            <div className={`transition-all duration-300 ease-in-out absolute flex h-3/5 p-1 mt-28 border-l-1 right-0 bg-white overflow-hidden ${!window ? 'w-6' : 'w-11/12'}`} >
                {!window && (<div className='flex items-center cursor-pointer' onClick={switchFetch}>{'◀'}</div>)}
                {window && (
                    <div className='flex pr-4 w-full'>
                        <div className='flex items-center cursor-pointer' onClick={() => {
                            setWindow(!window)
                        }}>{'▶'}</div>
                        <div className='pl-1 w-full '>
                            {!saveResultVacancy ? (<div>Загрузка...</div>) : (
                                <div>
                                    <h3 className='text-center'>Надежность компании</h3>
                                    <div>Надежность: {count}</div>
                                    <div className='w-full relative m-4 border h-5 mx-auto'>
                                        <div
                                            className={`absolute bg-slate-500 h-full`}
                                            style={{ width: `${count}%`, backgroundColor: `rgb(${color.colorRGBOne}, ${color.colorRGBTwo}, 0)` }}></div>
                                    </div>
                                    <div>
                                        <div>{saveResultVacancy?.revenueObj?.year
                                            ? `Прибыль за ${saveResultVacancy.revenueObj.year} составила ${saveResultVacancy.revenueObj.value}${saveResultVacancy.revenueObj.scale} (${saveResultVacancy.revenueObj.growth})`
                                            : 'Не нашлось информации о прибыли'}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default VacancyModelEntity