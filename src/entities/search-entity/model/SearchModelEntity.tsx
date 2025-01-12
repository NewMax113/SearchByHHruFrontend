import { FC, FormEvent } from "react"
import { Button, Input } from "../../../shared/ui";
import { ISearchModelEntity } from "../type/ISearchModelEntity";


const SearchModelEntity: FC<ISearchModelEntity> = ({
  textInput,
  onChangeEvent,
  handleClick,
}) => {

  return (
    <div className={'flex justify-center mt-1'}>
      <form className={'flex justify-between w-2/4 mt-1'} onSubmit={(e: FormEvent<HTMLFormElement>) => { handleClick(); e.preventDefault() }}>
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

export default SearchModelEntity