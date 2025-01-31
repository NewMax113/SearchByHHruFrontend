import { FC } from "react";
import { IParametersVacancy } from "../type/TypeVacancyModalEntity";

const ParametersVacancy: FC<IParametersVacancy> = ({vacancy}) => {
    return (
        <div>
            <div className='w-max ml-1'>
                {vacancy.salary
                    ? (vacancy.salary.from && vacancy.salary.to
                        ? <div className="border border-blue-200 text-orange-500 rounded-lg text-xs p-1 font-thin">{vacancy.salary.from.toLocaleString()} - {vacancy.salary.to.toLocaleString()} {vacancy.salary.currency}</div>
                        : (vacancy.salary.from
                            ? <div className="border border-blue-200 text-orange-500 rounded-lg text-xs p-1 font-thin">От {vacancy.salary.from.toLocaleString()} {vacancy.salary.currency}</div>
                            : <div className="border border-blue-200 text-orange-500 rounded-lg text-xs p-1 font-thin">До {vacancy.salary.to && vacancy.salary.to.toLocaleString()} {vacancy.salary.currency}</div>))
                    : <div className="border border-blue-200 text-orange-500 rounded-lg text-xs p-1 font-thin">З/п не указана</div>}
            </div>
            <div className='flex'>
                <div className='border border-blue-200 text-orange-500 rounded-lg text-center text-xs m-1 p-1 '>{vacancy.city}</div>
                <div className="border border-blue-200 ml-auto mr-auto m-0.5"></div>
                <div className='border border-blue-200 text-orange-500 rounded-lg text-center m-auto text-xs m-1 p-1'>{vacancy.schedule}</div>
                <div className="border border-blue-200 ml-auto mr-auto m-0.5"></div>
                <div className='border border-blue-200 text-orange-500 rounded-lg text-center text-xs m-1 p-1'>{vacancy.experience}</div>
            </div>

        </div>
    )
}

export default ParametersVacancy