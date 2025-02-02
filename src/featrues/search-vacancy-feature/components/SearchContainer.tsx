import { FC } from 'react'
import { ISearchContainer } from '../type/ISearch'
import useActionOnTheText from '../hooks/useActionOnTheText'
import useSaveVacancies from '../hooks/useSaveVacancies'
import { Button, Input } from '../../../shared/ui'
import { SearchModal } from '../../../entities'


const SearchContainer: FC<ISearchContainer> = ({ setLoading, setBeingVacansies }) => {
  let { onChangeEvent, handleClick, textInput } = useActionOnTheText({ setLoading })
  useSaveVacancies({ setLoading, setBeingVacansies })

  return (
    <SearchModal
      handleClick={handleClick}
    >
      <Input
        typeInput='text'
        value={textInput}
        placeholder='Поиск вакансии'
        onChange={onChangeEvent}
        classInput='w-3/4 px-1 border-b-1-blue focus:outline-0 rounded-l-md min-w-32 '
      />
      <Button
        classButton='font-semibold tracking-wide bg-blue-500 text-white px-4 py-2 hover:bg-sky-600 right-0 rounded-r-md'
        text='Поиск'
        onClick={handleClick}
      />
    </SearchModal>
  )
}

export default SearchContainer 