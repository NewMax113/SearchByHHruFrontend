import { FC } from 'react'
import { SearchModelEntity } from '../../../entities'
import { ISearchContainer } from '../type/ISearch'
import useActionOnTheText from '../hooks/useActionOnTheText'
import useSaveVacancies from '../hooks/useSaveVacancies'


const SearchContainer: FC<ISearchContainer> = ({ setLoading, setBeingVacansies }) => {
  let {onChangeEvent, handleClick, textInput} = useActionOnTheText({setLoading})
  useSaveVacancies({ setLoading, setBeingVacansies })

  return (
    <SearchModelEntity
      textInput={textInput}
      onChangeEvent={onChangeEvent}
      handleClick={handleClick}
    />
  )
}

export default SearchContainer 