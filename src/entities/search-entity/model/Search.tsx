import { FC, FormEvent } from "react"
import { ISearchModal } from "../type/ISearchModelEntity";


const SearchModal: FC<ISearchModal> = ({ handleClick, children }) => {

  return (
    <div className='flex justify-center mt-1 xl:mr-20 sm:mr-8 w-full mx-1'>
      <form data-testid="search-form" className='flex mt-1 w-full' onSubmit={(e: FormEvent<HTMLFormElement>) => { handleClick(); e.preventDefault() }}>
        {children}
      </form>
    </div>
  )
}

export default SearchModal