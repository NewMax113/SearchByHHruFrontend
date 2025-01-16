import { FC, useState } from 'react'
import { ListJobOpenings, SearchJobOpenings } from '../../widgets'
import FilteringVacancies from '../../widgets/filtering-vacancies/FilteringVacancies'


const PageStructure: FC = () => {
  let [loading, setLoading] = useState<boolean>(true)
  let [beingVacansies, setBeingVacansies] = useState<boolean>(true)

  return (
    <>
      <header>
        <SearchJobOpenings setLoading={setLoading} setBeingVacansies={setBeingVacansies} />
        <FilteringVacancies loading={loading}></FilteringVacancies>
      </header>
      <ListJobOpenings loading={loading} setLoading={setLoading} beingVacansies={beingVacansies} />
    </>
  )
}

export default PageStructure