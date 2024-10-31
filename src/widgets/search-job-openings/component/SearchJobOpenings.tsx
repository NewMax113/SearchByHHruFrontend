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
import useFetch from '../../../hooks/useFetch'


const SearchJobOpenings = ({ setLoading }: { setLoading: any }) => {
  let [text, setText] = useState<string>('')
  let [observerText, setObserverText] = useState<boolean>(false)
  let [textInput, setTextInput] = useState<string>('')
  const dispatch: any = useDispatch<AppDispatch>()
  // let vacancy = useSelector<IRootState, any>(state => console.log(state.jobOpeningReducer.job_opening_Array))
  // let parametersPresent = useSelector<IRootState, boolean>(state => state.params.parametersPresent)
  // let obj = useSelector<IRootState, any>(state => state.params.parameters)
  let pages = useSelector<IRootState, any>(state => !observerText ? state.pages.page : 0)
  let onChangeEvent = (e: ChangeEvent<HTMLInputElement>) => setTextInput(e.target.value)
  let handleClick = () => {
    setText(textInput)
    setObserverText(true)
  }
  // let [telo, setTelo] = useState<string>('&search_field=name&search_field=company_name&search_field=description')
  console.log(pages, 'СТРАНИЦА')
  let [count, setCount] = useState(0)

  let selectedVacancies = useFetch('https://api.hh.ru/vacancies', text, pages, 113, '&per_page=6',
    {
      method: 'GET',
      headers: {
        'HH-User-Agent': 'JobSearch (maxim0ruseev@gmail.com)'
      }
    })
  //стоит ли добавлять метод и headers при get запросе?

  useEffect(() => {

    if (selectedVacancies) {
      console.log(count, 'СЧЕТЧИК')
      setCount((count) => count + 1)

      const searchWord = async () => {
        setLoading(false)

        let vacancies = await sortVacancies(selectedVacancies)
        await dispatch(setPage(!observerText ? selectedVacancies.pages : {...selectedVacancies.pages, page: 0}))
        await dispatch(newObjectVacancyThunk(vacancies[0]))
        setObserverText(false)

        console.log(selectedVacancies)
        setLoading(true)
      }
      searchWord()
    }

  }, [selectedVacancies])

  return (
    <div className={'flex justify-center mt-1'}>
      <form className={'flex justify-between w-2/4'} onSubmit={(e: any) => { handleClick(); e.preventDefault()}}>
        <Input typeInput='text' value={textInput} placeholder='Поиск вакансии' onChange={onChangeEvent} classInput='border-2 mx-1.5 w-full px-1 rounded-md' />
        <Button classButton='font-semibold tracking-wide bg-gray-800 text-white rounded-md px-4 py-2 hover:bg-gray-700 right-0' text='Поиск' onClick={() => { handleClick()}} />
      </form>
    </div>
  )
}

export default SearchJobOpenings


