import { FC } from "react"
import { IVacancy } from "../../../pages/type/TypeJobOpening"

const VacancyHeadPararms: FC<{style: string, styleInterval: string, vacancy: IVacancy}> = ({style, styleInterval, vacancy}) => {
    return (
        <div className='flex'>
            <div className={`${style} text-center text-xs m-1 p-1`}>{vacancy.city}</div>
            <div className={styleInterval}></div>
            <div className={`${style} text-center m-auto text-xs m-1 p-1`}>{vacancy.schedule}</div>
            <div className={styleInterval}></div>
            <div className={`${style} text-center text-xs m-1 p-1`}>{vacancy.experience}</div>
        </div>
    )
}

export default VacancyHeadPararms