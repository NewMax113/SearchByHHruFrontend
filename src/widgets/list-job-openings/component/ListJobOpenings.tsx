import { useSelector, useDispatch } from 'react-redux'
import { pageMinus, pagePlus } from '../../search-job-openings/model/redux/pages-reducer'
import { IRootState, AppDispatch } from '../../parameters-job-openings/model/reducer'
import { VacancyMap } from './Vacancy'
import Select from '../../../ui/select'


const ListJobOpenings = ({ loading }: { loading: boolean }) => {
    let vacancies = useSelector<IRootState, any>(state => state.jobOpeningReducer.job_opening_Array)
    let pages = useSelector<IRootState, any>(state => state.pages.found)
    const dispatch: any = useDispatch<AppDispatch>()

    const minusPage = () => {
        dispatch(pageMinus())
    }

    const plusPage = () => {
        dispatch(pagePlus())
    }

    return (
        <>
            <div className='flex justify-around pt-4 text-sm'>
                <div className='min-w-40'>
                    Вакансий: {loading ? pages : 'Загрузка'}
                </div>
                <div className="text-sm whitespace-nowrap ">
                    <Select
                        id='vacancy'
                        name='vacancy'
                        required={true}
                        classSelect='border'
                        text={['Все', 'Читал', 'Не читал']}
                        valueOption={['', 'read', 'notRead']} />
                </div>
            </div>

            {loading
                ? (<div className={'flex items-center p-1.5 justify-center'}>
                    <div className={'cursor-pointer'}>
                        <div className={'text-4xl text-gray-400 hover:text-black'}
                            onClick={minusPage}>
                            ◀
                        </div>
                    </div>
                    <div className={"max-w-screen-xl p-8"}>
                        <div className={"sm:grid lg:grid-cols-3 sm:grid-cols-2 gap-10"}>
                            {vacancies[0] && vacancies[0].map((vacancy: any) => <VacancyMap vacancy={vacancy.vacancy} employer={vacancy.employer} />)}
                        </div>
                    </div>
                    <div className={'text-4xl cursor-pointer text-gray-400 hover:text-black'}
                        onClick={plusPage}>
                        ▶</div>
                </div>)
                : ''}
        </>
    )
}

export default ListJobOpenings