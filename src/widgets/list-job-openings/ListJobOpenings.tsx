import { useSelector, useDispatch } from 'react-redux'
import { pageMinus, pagePlus } from '../search-job-openings/model/redux/pages-reducer'
import { IRootState, AppDispatch } from '../parameters-job-openings/model/reducer'
import { VacancyMap } from '../../featrues/vacancy-feature/components/Vacancy'


const ListJobOpenings = ({ loading, setLoading, beingVacansies }: { loading: boolean, setLoading: any, beingVacansies: boolean }) => {
    let vacancies = useSelector<IRootState, any>(state => state.jobOpeningReducer.job_opening_Array)
    let page = useSelector<IRootState, any>(state => state.pages.page)
    let maxPage = useSelector<IRootState, any>(state => state.pages.pages)
    const dispatch: any = useDispatch<AppDispatch>()

    const minusPage = () => {
        dispatch(pageMinus())
        page > 0 && setLoading(true)
    }

    const plusPage = () => {
        dispatch(pagePlus())
        maxPage > page && setLoading(true)
    }

    if (!beingVacansies) {
        return (<div>ВАкансий нету(</div>)
    }

    return (
        <>
            {!loading
                ? (<div className={'flex items-center p-1.5 justify-center'}>
                    <div className={'cursor-pointer'}>
                        <div className={'text-4xl text-gray-400 hover:text-black'}
                            onClick={minusPage}>
                            {page > 0 && '◀'}

                        </div>
                    </div>
                    <div className={"max-w-screen-xl p-8"}>
                        <div className={"sm:grid lg:grid-cols-3 sm:grid-cols-2 gap-10"}>
                            {vacancies[0].map((vacanciesList: any) =>
                                <VacancyMap vacancy={vacanciesList.vacancy} />
                            )}
                        </div>
                    </div>
                    <div className={'text-4xl cursor-pointer text-gray-400 hover:text-black'}
                        onClick={plusPage}>
                        {maxPage > page && '▶'}
                    </div>
                </div>)
                : '...'}
        </>
    )
}

export default ListJobOpenings