import { useState } from 'react'
import {
  ListJobOpenings,
  SearchJobOpenings,
} from '../../widgets'


export const SearchVacancy = () => {
  let [loading, setLoading] = useState<boolean>(false)

  return (
      <div>
        <SearchJobOpenings setLoading={setLoading}/>
        <ListJobOpenings loading={loading}/>
      </div>
  )
}
 