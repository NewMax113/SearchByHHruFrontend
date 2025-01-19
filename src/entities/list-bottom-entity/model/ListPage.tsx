import { FC } from "react"
import { IListPage } from "../type/TypeListPage"

const ListPage: FC<IListPage> = ({
    arrPageButtonVisible, 
    page, 
    maxPage, 
    onClickHandle, 
    resetPage, 
    lastPage
}) => {

    return (
        <div className="text-blue-500 text-xl ">
            {!arrPageButtonVisible.includes(1 || 2 || 3) && <span className="p-1 cursor-pointer" onClick={resetPage} >В начало</span>}

            <span>
                {arrPageButtonVisible.map((value: number) =>
                    <span
                        className={`p-1 h-4 w-4 cursor-pointer ${page === value && 'shadow-inside-red text-red-500'}`}
                        onClick={() => onClickHandle(value)}>
                        {value}
                    </span>
                )}
            </span>

            {!arrPageButtonVisible.includes(maxPage) && <span className="p-1 cursor-pointer" onClick={lastPage} >...{maxPage}</span>}

        </div>

    )
}

export default ListPage