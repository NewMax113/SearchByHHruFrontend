import { FC } from 'react'
import { ListVacancy } from '../../featrues'
import { IListJobOpenings } from './type/IListJobOpenings'


const ListJobOpenings: FC<IListJobOpenings> = ({ loading, setLoading, beingVacansies }) => {

    return (
        <main>
            {!loading
                ? <ListVacancy beingVacansies={beingVacansies} setLoading={setLoading} />
                : '...'}
        </main>
    )
}

export default ListJobOpenings