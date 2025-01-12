import { FC } from "react"
import { IVacancyModelEntity } from "../type/TypeVacancyModalEntity"
import ContentVacancy from "./ContentVacancy"
import ModalVacancy from "./ModalVacancy"


const VacancyModelEntity: FC<IVacancyModelEntity> = ({
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
        <article className={"flex relative max-w-sm shadow-lg max-h-72 min-h-96 hover:outline hover:outline-1 hover:outline-gray-400 "}>
            <ContentVacancy
                vacancy={vacancy}
                theObj={theObj}
            />
            <ModalVacancy
                window={window}
                switchFetch={switchFetch}
                setWindow={setWindow}
                saveResultVacancy={saveResultVacancy}
                count={count}
                color={color}
            />
        </article>
    )
}

export default VacancyModelEntity