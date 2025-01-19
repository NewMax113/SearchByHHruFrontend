import { FC } from 'react'
import { ListVacancy } from '../../featrues'
import { IListJobOpenings } from './type/IListJobOpenings'


const ListJobOpenings: FC<IListJobOpenings> = ({ loading, setLoading, beingVacansies }) => {

    return (
        <div className='min-h-main'>
            {!loading
                ? <ListVacancy beingVacansies={beingVacansies} setLoading={setLoading} />
                : '...'}
        </div>
    )
}

export default ListJobOpenings