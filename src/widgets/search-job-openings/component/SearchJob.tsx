import Search from '../../../featrues/search-vacancy-feature/components/Search'


const SearchJobOpenings = ({ setLoading, setBeingVacansies }: { setLoading: any, setBeingVacansies: any }) => {
  return (
    <Search setLoading={setLoading} setBeingVacansies={setBeingVacansies}></Search>
  )
}

export default SearchJobOpenings