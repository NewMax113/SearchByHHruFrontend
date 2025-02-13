import { FC } from 'react'
import { ListVacancy } from '../../featrues'
import { IListJobOpenings } from './type/IListJobOpenings'
import LoadingListOpenings from '../loading-list-openings/LoadingListOpenings'
import ErrorWidget from '../error-widget/ErrorWidget'


const ListJobOpenings: FC<IListJobOpenings> = ({ loading, setLoading, beingVacansies }) => {

    if (!beingVacansies) {return <ErrorWidget />}

    return (
        <div className='min-h-main m-auto max-w-screen-xl p-2'>
            {!loading
                ? <ListVacancy setLoading={setLoading} />
                : <LoadingListOpenings />}
        </div>
    )
}

export default ListJobOpenings