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
    let page = useSelector<IRootState, number>(state => state.pages.page + 1)
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
        <div className={'flex items-center p-1.5 justify-center '}>
            <div className={'cursor-pointer sm:hidden lg:block'}>
                <div className={'text-4xl text-blue-500 hover:text-pink-500'}
                    onClick={minusPage}>
                    {page > 1 && '◀'}

                </div>
            </div>
            <div className={"max-w-screen-xl p-1.5"}>
                <div className={"sm:grid lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 gap-3"}>
                    {vacancies.map((vacanciesList: IJob_opening_Array) =>
                        <VacancyFeature vacancy={vacanciesList.vacancy} />
                    )}
                </div>
            </div>
            <div className={'text-4xl cursor-pointer text-blue-500 hover:text-pink-500 sm:hidden lg:block'}
                onClick={plusPage}>
                {maxPage > page && '▶'}
            </div>
        </div>
    )
}

export default ListVacancy