import { FC } from "react"
import { useSelector } from "react-redux"
import { AppDispatch, IRootState } from "../../../app/model/reducer"
import { useDispatch } from "react-redux"
import { pageMinus, pagePlus } from "../../../pages/model/pages-reducer"
import { VacancyFeature } from "../../"
import { IListVacancy } from "./type/IListVacancy"
import { IJob_opening_Array } from "../../../pages/type/TypeJobOpening"



const ListVacancy: FC<IListVacancy> = ({ beingVacansies, setLoading }) => {
    let vacancies = useSelector<IRootState, IJob_opening_Array[] | []>(state => state.jobOpeningReducer.job_opening_Array)
    let page = useSelector<IRootState, number>(state => state.pages.page)
    let maxPage = useSelector<IRootState, number>(state => state.pages.pages)
    const dispatch = useDispatch<AppDispatch>()
    console.log(page)

    const minusPage = () => {
        dispatch(pageMinus())
        setLoading(true)
    }

    const plusPage = () => {
        dispatch(pagePlus())
        setLoading(true)
    }

    vacancies[0].vacancy.id ? setLoading(false) : setLoading(true)

    if (!beingVacansies) {
        return (<div>ВАкансий нету(</div>)
    }

    return (
        <div className={'flex items-center p-1.5 justify-center'}>
            <div className={'cursor-pointer'}>
                <div className={'text-4xl text-gray-400 hover:text-black'}
                    onClick={minusPage}>
                    {page > 0 && '◀'}

                </div>
            </div>
            <div className={"max-w-screen-xl p-8"}>
                <div className={"sm:grid lg:grid-cols-3 sm:grid-cols-2 gap-10"}>
                    {vacancies.map((vacanciesList: IJob_opening_Array) =>
                        <VacancyFeature vacancy={vacanciesList.vacancy}/>
                    )}
                </div>
            </div>
            <div className={'text-4xl cursor-pointer text-gray-400 hover:text-black'}
                onClick={plusPage}>
                {maxPage > page && '▶'}
            </div>
        </div>
    )
}

export default ListVacancy