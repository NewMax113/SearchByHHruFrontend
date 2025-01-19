import { useState, ChangeEvent, FC } from 'react'
import { useDispatch } from 'react-redux'
import useRedirectRequestResponse from '../hooks/useRedirectRequestResponse'
import { SearchModelEntity } from '../../../entities'
import { AppDispatch, IRootState } from '../../../app/model/reducer'
import { setBodyRequest } from '../../../pages/model/parameters-reducer'
import useCreatingQueryParameters from '../hooks/useCreatingQueryParameters'
import { setTextRedux } from '../../../pages/model/job-opening-reducer'
import { useSelector } from 'react-redux'
import { newPage } from '../../../pages/model/pages-reducer'
import { useFetchSearchResultsQuery } from '../hooks/useFetchSearchResultsQuery'
import { ISearchContainer } from '../type/ISearch'


const SearchContainer: FC<ISearchContainer> = ({ setLoading, setBeingVacansies }) => {
  const dispatch = useDispatch<AppDispatch>()
  let text = useSelector<IRootState, string>(state => state.jobOpeningReducer.text)

  let [textInput, setTextInput] = useState<string>('')

  const url = useCreatingQueryParameters()

  const { data, error } = useFetchSearchResultsQuery({
    url,
    method: 'GET',
    headers: {
      'User-Agent': 'JobSearch (maxim0ruseev@gmail.com)',
      'Content-Type': 'application/x-www-form-urlencoded',
    }
  })

  if (error) {
    console.log(error)
    setBeingVacansies(false)
  } else {
    setBeingVacansies(true)
  }

  useRedirectRequestResponse({ data, setLoading })
  const onChangeEvent = (e: ChangeEvent<HTMLInputElement>) => setTextInput(e.target.value)

  const handleClick = () => {
    dispatch(setBodyRequest())
    dispatch(newPage(0))
    if (textInput !== text) {
      dispatch(setTextRedux(textInput))
      setLoading(true)
    } else {
      setLoading(false)
    }
  }

  return (
    <SearchModelEntity
      textInput={textInput}
      onChangeEvent={onChangeEvent}
      handleClick={handleClick}
    />
  )
}

export default SearchContainer 