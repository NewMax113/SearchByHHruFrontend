import React, {
  useState,
  ChangeEvent,
} from 'react'
import style from '../style/style.module.scss'
import { sortVacancies } from '../model/sortVacancies'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../../Parameters_job_openings/model/reducer'
import { getListVacancies } from '../model/job_opening-reducer'
import { useSelector } from 'react-redux'
import { IRootState } from '../../Parameters_job_openings/model/reducer'
import { newObjectVacancyThunk } from '../model/newObjectVacancy-thunk'


export const Search_job_openings = () => {
  let [word, setWord] = useState<string>('')
  const dispatch: any = useDispatch<AppDispatch>()
  let vacancy = useSelector<IRootState, any>(state => console.log(state.job_openingReducer.job_opening_Array))

  let textInput = (e: ChangeEvent<HTMLInputElement>) => setWord(e.target.value)

  const searchWord = async (word: string) => {
    // let selectedVacancies = await fetch(`https://api.hh.ru/vacancies?text=${word}&area=113`, {
    //   method: 'GET',
    //   headers: {
    //     'HH-User-Agent': 'JobSearch (maxim0ruseev@gmail.com)'
    //   },
    // })
    //   .then(response => response.json())
    //   .then((data) => {return {
    //     found: data.found,
    //     items: data.items
    //   }})
    //   .catch(err => console.log('Ошибочка:', err))
    // await dispatch (newObjectVacancyThunk(sortVacancies(selectedVacancies)))

    let selectedVacancies = await fetch(`http://localhost:3000/`)
      .then(response => response.json())
      .then(data => data)
      .catch(err => console.log('Ошибочка:', err))

    await dispatch(newObjectVacancyThunk(selectedVacancies))
  }


  //   //показывает данные вакансии
  // const vakansi = async () => {
  //   let selectedVacancies = await fetch(`https://api.hh.ru/vacancies/95300158`, {
  //     method: 'GET',
  //     headers: {
  //       'HH-User-Agent': 'JobSearch (maxim0ruseev@gmail.com)'
  //     },
  //   })
  //     .then(response => response.json())
  //     .then(data => console.log(data))
  //     .catch(err => console.log('Ошибочка:', err))
  // }

  //   //получаем список всех вакансий работодателя
  //   const company = async () => {
  //     let selectedVacancies = await fetch("https://api.hh.ru/vacancies?employer_id=723714", {
  //       method: 'GET',
  //       headers: {
  //         'HH-User-Agent': 'JobSearch (maxim0ruseev@gmail.com)'
  //       },
  //     })
  //       .then(response => response.json())
  //       .then(data => console.log(data))
  //       .catch(err => console.log('Ошибочка:', err))
  //   }


  // //получаем страницу работодателя
  //   const getRabotodatel = async () => {
  //     let selectedVacancies = await fetch("https://api.hh.ru/employers/723714", {
  //       method: 'GET',
  //       headers: {
  //         'HH-User-Agent': 'JobSearch (maxim0ruseev@gmail.com)'
  //       },
  //     })
  //       .then(response => response.json())
  //       .then(data => console.log(data))
  //       .catch(err => console.log('Ошибочка:', err))
  //   }

  //   company()
  //   getRabotodatel()


  return (
    // <div className={style.search}>
    //   <input
    //     type="text"
    //     placeholder='Поиск вакансии'
    //     className={style.input}
    //     onChange={textInput}
    //   />
    //   <button
    //     className={style.btn}
    //     onClick={() => searchWord(word)}>
    //     Поиск
    //   </button>
    // </div>

    <div className={'flex justify-center mt-1'}>
      <div className={'flex justify-between w-2/4'}>
        <input
          type="text"
          placeholder='Поиск вакансии'
          className={'border-2 mx-1.5 w-full px-1 rounded-md'}
          onChange={textInput}
        />
        <button className={"font-semibold tracking-wide bg-gray-800 text-white rounded-md px-4 py-2 hover:bg-gray-700 right-0 "}>
          Поиск
        </button>
      </div>
    </div>

  )
}


