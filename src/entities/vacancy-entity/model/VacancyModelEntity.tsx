import { FC, useState } from "react"
import { IVacancyModelEntity } from "../type/TypeVacancyModalEntity"
import { ButtonsVacancy, DescriptionVacancy, NameVacancy, ParametersVacancy } from "../ui"
import StatisticslVacancy from "../ui/StatisticslVacancy"


const VacancyModelEntity: FC<IVacancyModelEntity> = ({
    vacancy,
    theObj,
    saveResultVacancy,
    count,
    color,
    isLoading,
    onClickHandle,
}) => {
    const [desc, setDesc] = useState<boolean>(false)
    if (desc) {
        return (
            <DescriptionVacancy desc={desc} setDesc={setDesc} theObj={theObj} vacancy={vacancy} />
        )
    }

    return (
        <article className={"sm:mb-0 xs:mb-4 rounded flex relative max-w-80 max-h-72 shadow-lg min-h-100 hover:outline hover:outline-1 hover:outline-emerald-400 py-2 relative px-4 w-full"}>
            <div className="flex flex-col justify-between h-full">
                <div className='h-52 overflow-auto flex flex-col justify-between'>
                    <NameVacancy vacancy={vacancy} />
                    <ParametersVacancy vacancy={vacancy} />
                </div>
                <StatisticslVacancy
                    saveResultVacancy={saveResultVacancy}
                    count={count}
                    color={color}
                    isLoading={isLoading}
                    onClickHandle={onClickHandle}
                />
            </div>
            <ButtonsVacancy desc={desc} setDesc={setDesc} vacancy={vacancy} />
        </article>
    )
}

export default VacancyModelEntity