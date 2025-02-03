import { FC } from "react"
import { useSelector } from "react-redux"
import { IRootState } from "../../../app/model/reducer"
import { VacancyFeature } from "../../"
import { IListVacancy } from "./type/IListVacancy"
import { IJob_opening_Array } from "../../../pages/type/TypeJobOpening"


const ListVacancy: FC<IListVacancy> = ({ setLoading }) => {
    let vacancies = useSelector<IRootState, IJob_opening_Array[] | []>(state => state.jobOpeningReducer.job_opening_Array)

    vacancies[0].vacancy.id ? setLoading(false) : setLoading(true)

    return (
        <div className={"sm:grid lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 xs:grid-cols-2 gap-3"}>
            {vacancies.map((vacanciesList: IJob_opening_Array) =>
                <VacancyFeature key={vacanciesList.vacancy.id} vacancy={vacanciesList.vacancy} />
            )}
        </div>
    )
}

export default ListVacancy