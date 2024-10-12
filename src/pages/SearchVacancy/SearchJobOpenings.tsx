import React from 'react'
import style from './styles/style.module.scss'
import {
  List_job_openings,
  Search_job_openings,
  Parameters_job_openings
} from '../../widgets'


export const SearchVacancy = () => {
  return (
    <>
      <div className={style.main}>
        <Search_job_openings />
        <List_job_openings />
      </div>
      <div>
        {/* <Parameters_job_openings /> */}
      </div>

    </>
  )
}
 