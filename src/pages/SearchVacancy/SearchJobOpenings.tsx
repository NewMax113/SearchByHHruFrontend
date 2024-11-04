import { useState } from 'react'
import {
  ListJobOpenings,
  SearchJobOpenings,
} from '../../widgets'


export const SearchVacancy = () => {
  let [loading, setLoading] = useState<boolean>(true)

  return (
      <div>
        <SearchJobOpenings setLoading={setLoading}/>
        <ListJobOpenings loading={loading} setLoading={setLoading}/>
      </div>
  )
}
 