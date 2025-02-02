import { FC } from "react";
import { IParametersVacancy } from "../type/TypeVacancyModalEntity";
import VacancySalary from "../ui/VacancySalary";
import VacancyHeadPararms from "../ui/VacancyHeadParams";

const ParametersVacancy: FC<IParametersVacancy> = ({vacancy}) => {
    const style = 'border border-blue-200 text-orange-500 rounded-lg'
    const styleTextSalary = 'text-xs p-1 font-thin'
    const styleInterval = 'border border-blue-200 ml-auto mr-auto m-0.5"'

    return (
        <div>
            <div className='w-max ml-1'>
                {vacancy.salary
                    ? (vacancy.salary.from && vacancy.salary.to
                        ? <VacancySalary className={`${style} ${styleTextSalary}`}>{vacancy.salary.from.toLocaleString()} - {vacancy.salary.to.toLocaleString()} {vacancy.salary.currency}</VacancySalary>
                        : (vacancy.salary.from
                            ? <VacancySalary className={`${style} ${styleTextSalary}`}>От {vacancy.salary.from.toLocaleString()} {vacancy.salary.currency}</VacancySalary>
                            : <VacancySalary className={`${style} ${styleTextSalary}`}>До {vacancy.salary.to && vacancy.salary.to.toLocaleString()} {vacancy.salary.currency}</VacancySalary>))
                    : <VacancySalary className={`${style} ${styleTextSalary}`}>З/п не указана</VacancySalary>}
            </div>
            <VacancyHeadPararms style={style} styleInterval={styleInterval} vacancy={vacancy}/>
        </div>
    )
}

export default ParametersVacancy