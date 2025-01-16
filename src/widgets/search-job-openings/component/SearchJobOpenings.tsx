import { useState, ChangeEvent, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { AppDispatch, IRootState } from '../../parameters-job-openings/model/reducer'
import { Input, Button } from '../../../ui'
import useFetch from '../../../hooks/useFetch'
import useCreateUrlParams from '../../../hooks/useCreateUrlParams'
import useRedirectRequestResponse from '../../../hooks/useRedirectRequestResponse'
import useGetCookie from '../../../hooks/useGetCookie'
import { useDispatch } from 'react-redux'
import { setPage } from '../model/redux/pages-reducer'


const SearchJobOpenings = ({ setLoading, setBeingVacansies }: { setLoading: any, setBeingVacansies: any }) => {
  let [text, setText] = useState<string>('')
  let [resetPages, setResetPages] = useState<boolean>(false)
  let [textInput, setTextInput] = useState<string>('')
  let parametersPresent = useSelector<IRootState, boolean>(state => state.params.parametersPresent)
  let parameters = useSelector<IRootState, any>(state => state.params.parameters)
  let obj = useSelector<IRootState, any>(state => state.params.parameters)
  let pages = useSelector<IRootState, any>(state => !resetPages ? state.pages.page : 0)
  let perPageMax = useSelector<IRootState, any>(state => state.pages.per_page_max)
  let token = useGetCookie('token')
  let bodyRequest = useCreateUrlParams(parametersPresent, parameters, obj, setResetPages, pages, perPageMax, token)
  console.log(bodyRequest)
  let {data, error} = useFetch('http://localhost:3001/', bodyRequest, 'GET',
    {
      'User-Agent': 'JobSearch (maxim0ruseev@gmail.com)',
      'Content-Type': 'application/x-www-form-urlencoded'
    },)
  
if (error) {
  console.log(error)
  setBeingVacansies(false)
} else {
  setBeingVacansies(true)
}

useRedirectRequestResponse(data, setResetPages, resetPages, setLoading)
  const onChangeEvent = (e: ChangeEvent<HTMLInputElement>) => setTextInput(e.target.value)

  const handleClick = () => {
    if (textInput !== text) {
      setText(textInput)
      setResetPages(true)
      setLoading(true)
    } else {
      setLoading(false)
    }
  }

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