import React, {
  useState,
  ChangeEvent,
  useEffect,
} from 'react'
import { useDispatch } from 'react-redux'
import { sortVacancies } from '../model/sortVacancies'
import { AppDispatch } from '../../Parameters_job_openings/model/reducer'
import { getListVacancies } from '../model/job_opening-reducer'
import { useSelector } from 'react-redux'
import { IRootState } from '../../Parameters_job_openings/model/reducer'
import { newObjectVacancyThunk } from '../model/newObjectVacancy-thunk'
import { setPage } from '../model/redux/pages-reducer'


export const Search_job_openings = () => {
  let [word, setWord] = useState<string>('')
  const dispatch: any = useDispatch<AppDispatch>()
  let vacancy = useSelector<IRootState, any>(state => console.log(state.job_openingReducer.job_opening_Array))
  let pages = useSelector<IRootState, any>(state => state.pages.page)
  console.log(pages)

  let textInput = (e: ChangeEvent<HTMLInputElement>) => setWord(e.target.value)

  const searchWord = async (word: string) => {
    let selectedVacancies: any = await fetch(`https://api.hh.ru/vacancies?text=${word}&area=113&per_page=6&page=${pages}`, {
      method: 'GET',
      headers: {
        'HH-User-Agent': 'JobSearch (maxim0ruseev@gmail.com)'
      },
    })
      .then(response => response.json())
      .then((data) => {return {
        pages: {
          pages: data.pages,
          page: data.page,
          found: data.found
        },
        items: data.items
      }})
      .catch(err => console.log('Ошибочка:', err))
      console.log( await sortVacancies(selectedVacancies))
      let vacancies = await sortVacancies(selectedVacancies)
    dispatch (newObjectVacancyThunk(vacancies[0]))
    dispatch (setPage(vacancies[1]))

    // let selectedVacancies = await fetch(`http://localhost:3000/`)
    //   .then(response => response.json())
    //   .then(data => data)
    //   .catch(err => console.log('Ошибочка:', err))

    // await dispatch(newObjectVacancyThunk(selectedVacancies))
  }
  useEffect(() => {
    searchWord(word)
  }, [pages])

  return (
    <div className={'flex justify-center mt-1'}>
      <div className={'flex justify-between w-2/4'}>
        <input
          type="text"
          placeholder='Поиск вакансии'
          className={'border-2 mx-1.5 w-full px-1 rounded-md'}
          onChange={textInput}
        />
        <button
          className={"font-semibold tracking-wide bg-gray-800 text-white rounded-md px-4 py-2 hover:bg-gray-700 right-0 "}
          onClick={() => searchWord(word)}>
          Поиск
        </button>
      </div>
    </div>

  )
}


