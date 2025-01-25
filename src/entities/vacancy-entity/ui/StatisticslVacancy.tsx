import { FC } from "react"
import { IStatisticslVacancy } from "../type/TypeVacancyModalEntity"


const StatisticslVacancy: FC<IStatisticslVacancy> = ({
    saveResultVacancy,
    count,
    color,
    isLoading,
    onClickHandle
}) => {

    if (!saveResultVacancy && !isLoading) {
        return (
            <div className="h-2/4 flex items-center mb-7">
                <button className="absolute left-1/4 border p-1 rounded-lg border-blue-300 text-blue-500 hover:bg-blue-500 hover:text-white hover:shadow-lg" onClick={onClickHandle} >Расчитать надежность</button>
            </div>
        )
    }

    if (!saveResultVacancy && isLoading) {
        return (
            <div className="h-2/4 flex items-center mb-7">
                <div className="absolute  left-1/3 flex items-center">
                    <span className="text-lg mr-4 text-blue-600">Загрузка</span>
                    <svg className="animate-spin h-5 w-5 text-blue-600" xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path className="opacity-75" fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                        </path>
                    </svg>
                </div>
        </div>
        )
    }

    return (
        <div className='h-2/4 pl-1 w-full mb-7'>
            <hr />
            <h3 className='text-center text-blue-500 font-medium'>Надежность компании</h3>
            <hr />
            <div className="flex flex-row items-center">
                <div className='rounded-full relative my-px border h-1 w-8/12 flex mr-2'>
                    <div
                        className={`rounded-full absolute bg-slate-500 h-0.5 w-8/12 `}
                        style={{ width: `${count}%`, backgroundColor: `rgb(${color.colorRGBOne}, ${color.colorRGBTwo}, 0)` }}>
                    </div>
                </div>
                <div>{count}%</div>
            </div>
            <div>
                <div>{saveResultVacancy?.revenueObj?.year
                    ? `Прибыль за ${saveResultVacancy.revenueObj.year} составила ${saveResultVacancy.revenueObj.value}${saveResultVacancy.revenueObj.scale} (${saveResultVacancy.revenueObj.growth})`
                    : 'Не нашлось информации о прибыли'}
                </div>
            </div>
        </div>
    )
}

export default StatisticslVacancy