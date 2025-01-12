import { FC } from "react"
import { IModalVacancy } from "../type/TypeVacancyModalEntity"


const ModalVacancy: FC<IModalVacancy> = ({
    window,
    switchFetch,
    setWindow,
    saveResultVacancy,
    count,
    color
}) => {

    return (
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
    )
}

export default ModalVacancy