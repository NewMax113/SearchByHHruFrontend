import { useState } from 'react'
import {
  ListJobOpenings,
  SearchJobOpenings,
} from '../../widgets'


export const SearchVacancy = () => {
  let [loading, setLoading] = useState<boolean>(true)
  let [beingVacansies, setBeingVacansies] = useState<boolean>(true)

  return (
      <div>
        <SearchJobOpenings setLoading={setLoading} setBeingVacansies={setBeingVacansies}/>
        <ListJobOpenings loading={loading} setLoading={setLoading} beingVacansies={beingVacansies}/>
      </div>
  )
}
 