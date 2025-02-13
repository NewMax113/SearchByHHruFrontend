import { FC } from "react"
import { IStatisticsVacancy } from "../type/TypeVacancyModalEntity"

const StatisticsVacancy: FC<IStatisticsVacancy> = ({count, color, saveResultVacancy}) => {
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

export default StatisticsVacancy