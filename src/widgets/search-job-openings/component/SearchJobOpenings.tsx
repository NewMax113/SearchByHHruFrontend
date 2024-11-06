import { useState, ChangeEvent, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sortVacancies } from '../model/sortVacancies'
import { AppDispatch, IRootState } from '../../parameters-job-openings/model/reducer'
import { setPage } from '../model/redux/pages-reducer'
import { Input, Button } from '../../../ui'
import useFetch from '../../../hooks/useFetch'
import { setListVacancies } from '../model/job-opening-reducer'


const SearchJobOpenings = ({ setLoading }: { setLoading: any }) => {
  let [text, setText] = useState<string>('')
  let [observerText, setObserverText] = useState<boolean>(false)
  let [textInput, setTextInput] = useState<string>('')
  let [telo, setTelo] = useState<string>('')
  const dispatch: any = useDispatch<AppDispatch>()
  let parametersPresent = useSelector<IRootState, boolean>(state => state.params.parametersPresent)
  let parameters = useSelector<IRootState, any>(state => state.params.parameters)
  let obj = useSelector<IRootState, any>(state => state.params.parameters)
  let pages = useSelector<IRootState, any>(state => !observerText ? state.pages.page : 0)
  let perPageMax = useSelector<IRootState, any>(state => state.pages.per_page_max)

  // const searchWord = async () => {
  //   await fetch(`http://localhost:3000/?text=${text}&page=${pages}&per_page=${perPageMax}${telo}`)
  //     .then(res => res.json())
  //     .then(data => console.log(data))
  //     .catch(er => console.log('er'))
  // }
  // // const searchWord2 = async () => {
  //   await fetch('http://localhost:3000/feedback', {
  //     method: "POST",
  //     body: JSON.stringify({
  //       userId: 1,
  //       title: "Fix my bugs",
  //       completed: false
  //     })})
    

  //     // .then(res => res.text())
  //     // .then(data => console.log(data))
  //     // .catch(er => console.log('er'))
  // }


  // useEffect(() => {
  //   searchWord()
  // }, [])

  const onChangeEvent = (e: ChangeEvent<HTMLInputElement>) => setTextInput(e.target.value)

  const handleClick = () => {
    if (textInput !== text) {
      setText(textInput)
      setObserverText(true)
      setLoading(true)
    } else {
      setLoading(false)
    }
  }

  let selectedVacancies = useFetch('http://localhost:3000/', text, pages, perPageMax, 113, telo)

  const requestResponse = async () => {
    //let vacancies = await sortVacancies(selectedVacancies)
    await dispatch(setPage(!observerText ? selectedVacancies.pages : { ...selectedVacancies.pages, page: 0 }))
    await dispatch(setListVacancies(selectedVacancies.items))
    setObserverText(false)
    setLoading(false)
    console.log(selectedVacancies)
  }

  useEffect(() => {
    setTelo('')
    if (parametersPresent) {
      for (let key in obj) {
        const value = obj[key];

        if (typeof value === 'object') {
          if (value.noExp) setTelo(telo => `${telo}&experience=noExperience`);
          if (value.minExp) setTelo(telo => `${telo}&experience=between1And3`);
          if (value.maxExp) setTelo(telo => `${telo}&experience=between3And6`);
          if (value.full) setTelo(telo => `${telo}&schedule=fullDay`);
          if (value.replaceable) setTelo(telo => `${telo}&schedule=shift`);
          if (value.remote) setTelo(telo => `${telo}&schedule=remote`);
        }
        else if (key === 'earning' && value) {
          setTelo(telo => `${telo}&salary=${value}&only_with_salary=true`);
        }
      }
    }
  }, [parametersPresent, parameters])

  useEffect(() => {
    if (selectedVacancies) {
      requestResponse()
    }
  }, [selectedVacancies])

  return (
    <div className={'flex justify-center mt-1'}>
      <form className={'flex justify-between w-2/4'} onSubmit={(e: any) => { handleClick(); e.preventDefault() }}>
        <Input
          typeInput='text'
          value={textInput}
          placeholder='Поиск вакансии'
          onChange={onChangeEvent}
          classInput='border-2 mx-1.5 w-full px-1 rounded-md'
        />
        <Button
          classButton='font-semibold tracking-wide bg-gray-800 text-white rounded-md px-4 py-2 hover:bg-gray-700 right-0'
          text='Поиск'
          onClick={handleClick}
        />
      </form>
    </div>
  )
}

export default SearchJobOpenings