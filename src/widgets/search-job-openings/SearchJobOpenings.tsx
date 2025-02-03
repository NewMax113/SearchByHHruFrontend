import { FC } from 'react'
import { SearchContainer } from '../../featrues'
import { ISearchJobOpenings } from './type/ISearchJobOpenings'


const SearchJobOpenings: FC<ISearchJobOpenings> = ({ setLoading, setBeingVacansies }) => {
  return (
    <SearchContainer setLoading={setLoading} setBeingVacansies={setBeingVacansies} />
  )
}

export default SearchJobOpenings