import { useState, ChangeEvent, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { AppDispatch, IRootState } from '../../../widgets/parameters-job-openings/model/reducer'
import useGetCookie from '../../../shared/hooks/useGetCookie'
import useFetch from '../../../shared/hooks/useFetch'
import useRedirectRequestResponse from '../hooks/useRedirectRequestResponse'
import { setBodyRequest } from '../../../widgets/parameters-job-openings/model/params-reducer'
import SearchModelEntity from '../../../entities/search-entity/model/SearchModelEntity'


const Search = ({ setLoading, setBeingVacansies }: { setLoading: any, setBeingVacansies: any }) => {
  const dispatch: any = useDispatch<AppDispatch>()
  let body = useSelector<IRootState, any>(state => state.params.requestBody)
  let [text, setText] = useState<string>('')
  let [resetPages, setResetPages] = useState<boolean>(false)//
  let [textInput, setTextInput] = useState<string>('')
  let page = useSelector<IRootState, any>(state => !resetPages ? state.pages.page : 0)//
  let per_page = useSelector<IRootState, any>(state => state.pages.per_page_max)//
  let token = useGetCookie('token')//
  let bodyRequest = { page, per_page, text, ...body, token }//

  let cleanBodyPost: any = Object.entries(bodyRequest).reduce((acc: any, [key, value]) => {
    if (Array.isArray(value)) {
      value.forEach((item) => acc.append(key, item));
    } else {
      acc.append(key, value);
    }
    return acc;
  }, new URLSearchParams());
  let queryParams = cleanBodyPost.toString();

  useEffect(() => {
    setResetPages(true)
  }, [body])

  let { data, error } = useFetch('http://localhost:3001/',
    queryParams,
    'GET',
    {
      'User-Agent': 'JobSearch (maxim0ruseev@gmail.com)',
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    null
  )

  if (error) {
    console.log(error)
    setBeingVacansies(false)
  } else {
    setBeingVacansies(true)
  }

  useRedirectRequestResponse(data, setResetPages, resetPages, setLoading)
  const onChangeEvent = (e: ChangeEvent<HTMLInputElement>) => setTextInput(e.target.value)

  const handleClick = () => {
    dispatch(setBodyRequest())
    if (textInput !== text) {
      setText(textInput)
      setResetPages(true)
      setLoading(true)
    } else {
      setLoading(false)
    }
  }

  return (
   <SearchModelEntity textInput={textInput} onChangeEvent={onChangeEvent} handleClick={handleClick}/>
  )
}

export default Search