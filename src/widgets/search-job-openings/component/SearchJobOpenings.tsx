import React, {
  useState,
  ChangeEvent,
  useEffect,
} from 'react'
import { useDispatch } from 'react-redux'
import { sortVacancies } from '../model/sortVacancies'
import { AppDispatch } from '../../parameters-job-openings/model/reducer'
import { getListVacancies } from '../model/job-opening-reducer'
import { useSelector } from 'react-redux'
import { IRootState } from '../../parameters-job-openings/model/reducer'
import { newObjectVacancyThunk } from '../model/newObjectVacancy-thunk'
import { setPage } from '../model/redux/pages-reducer'
import Input from '../../../ui/Input'
import Button from '../../../ui/button'


const SearchJobOpenings = ({ setLoading }: { setLoading: any }) => {
  let [word, setWord] = useState<string>('')
  const dispatch: any = useDispatch<AppDispatch>()
  let vacancy = useSelector<IRootState, any>(state => console.log(state.jobOpeningReducer.job_opening_Array))
  let pages = useSelector<IRootState, any>(state => state.pages.page)
  let textInput = (e: ChangeEvent<HTMLInputElement>) => setWord(e.target.value)

  const start = performance.now();//счетчик времени начала

  const searchWord = async (word: string) => {
    setLoading(false)
    console.log('ВЫЗОВ !111')
    let selectedVacancies: any = await fetch(`https://api.hh.ru/vacancies?text=${word}&area=113&per_page=6&page=${pages}`, {
      method: 'GET',
      headers: {
        'HH-User-Agent': 'JobSearch (maxim0ruseev@gmail.com)'
      },
    })
      .then(response => response.json())
      .then((data) => {
        return {
          pages: {
            pages: data.pages,
            page: data.page,
            found: data.found
          },
          items: data.items
        }
      })
      .catch(err => console.log('Ошибочка:', err))
    let vacancies = await sortVacancies(selectedVacancies)
    await dispatch(newObjectVacancyThunk(vacancies[0]))
    await dispatch(setPage(vacancies[1]))
    setLoading(true)

    const end = performance.now(); //счетчик времени конец
    console.log(`searchWord: ${end - start} ms`);

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
      <form className={'flex justify-between w-2/4'} onSubmit={() => searchWord(word)}>
        <Input typeInput='text' value='' placeholder='Поиск вакансии' onchange={textInput} classInput='border-2 mx-1.5 w-full px-1 rounded-md' />
        <Button classButton='font-semibold tracking-wide bg-gray-800 text-white rounded-md px-4 py-2 hover:bg-gray-700 right-0' text='Поиск' click={async () => searchWord(word)} />
      </form>
    </div>
  )
}

export default SearchJobOpenings


