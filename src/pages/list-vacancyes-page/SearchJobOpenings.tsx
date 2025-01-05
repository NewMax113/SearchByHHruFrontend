import { useState } from 'react'
import {
  ListJobOpenings,
  SearchJobOpenings,
} from '../../widgets'
import FilteringVacancies from '../../widgets/filtering-vacancies/FilteringVacancies'


export const SearchVacancy = () => {
  let [loading, setLoading] = useState<boolean>(true)
  let [beingVacansies, setBeingVacansies] = useState<boolean>(true)

  return (
    <>
      <header>
        <SearchJobOpenings setLoading={setLoading} setBeingVacansies={setBeingVacansies} />
        <FilteringVacancies loading={loading}></FilteringVacancies>
      </header>
      <main>
        <ListJobOpenings loading={loading} setLoading={setLoading} beingVacansies={beingVacansies} />
      </main>
    </>
  )
}
