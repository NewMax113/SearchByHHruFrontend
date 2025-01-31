import { FC, FormEvent } from "react"
import { Button, Input } from "../../../shared/ui";
import { ISearch } from "../type/ISearchModelEntity";


const Search: FC<ISearch> = ({
  textInput,
  onChangeEvent,
  handleClick,
}) => {

  return (
    <div className='flex justify-center mt-1 xl:mr-20 sm:mr-8 w-full mx-1'>
      <form data-testid="search-form" className='flex mt-1 w-full' onSubmit={(e: FormEvent<HTMLFormElement>) => { handleClick(); e.preventDefault() }}>
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
      </form>
    </div>
  )
}

export default Search