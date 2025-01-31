import { FC } from 'react'
import { Search } from '../../featrues'
import { ISearchJobOpenings } from './type/ISearchJobOpenings'


const SearchJobOpenings: FC<ISearchJobOpenings> = ({ setLoading, setBeingVacansies }) => {
  return (
    <Search setLoading={setLoading} setBeingVacansies={setBeingVacansies}></Search>
  )
}

export default SearchJobOpenings