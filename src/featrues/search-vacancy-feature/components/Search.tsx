import { useState, ChangeEvent, useEffect, FC } from 'react'
import { useDispatch } from 'react-redux'
import useFetch from '../../../shared/hooks/useFetch'
import useRedirectRequestResponse from '../hooks/useRedirectRequestResponse'
import { SearchModelEntity } from '../../../entities'
import { AppDispatch, IRootState } from '../../../app/model/reducer'
import { setBodyRequest } from '../../../pages/model/parameters-reducer'
import { IDataSearch, IDataSearchFetch, ISearch } from '../type/ISearch'
import useCreatingQueryParameters from '../hooks/useCreatingQueryParameters'
import useResetPage from '../hooks/useResetPage'
import { setTextRedux } from '../../../pages/model/job-opening-reducer'
import { useSelector } from 'react-redux'


const Search: FC<ISearch> = ({ setLoading, setBeingVacansies }) => {
  const dispatch = useDispatch<AppDispatch>()
  let text = useSelector<IRootState, string>(state => state.jobOpeningReducer.text)
  console.log(text)
  //let [text, setText] = useState<string>('')
  let [resetPages, setResetPages] = useState<boolean>(false)
  let [textInput, setTextInput] = useState<string>('')

  const queryParams = useCreatingQueryParameters({resetPages, setResetPages, text})

  let { data, error }: IDataSearchFetch = useFetch<IDataSearch>({
    url: 'http://localhost:3001/',
    linkBody: queryParams,
    method: 'GET',
    headers: {
      'User-Agent': 'JobSearch (maxim0ruseev@gmail.com)',
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  })

  useResetPage({pages: data?.pages, resetPages, setResetPages})



  if (error) {
    console.log(error)
    setBeingVacansies(false)
  } else {
    setBeingVacansies(true)
  }

  useRedirectRequestResponse({data, setLoading})
  const onChangeEvent = (e: ChangeEvent<HTMLInputElement>) => setTextInput(e.target.value)

  const handleClick = () => {
    dispatch(setBodyRequest())
    if (textInput !== text) {
      dispatch(setTextRedux(textInput))
      //setText(textInput)
      //setResetPages(true)
      setLoading(true)
    } else {
      setLoading(false)
    }
  }

  return (
    <SearchModelEntity textInput={textInput} onChangeEvent={onChangeEvent} handleClick={handleClick} />
  )
}

export default Search