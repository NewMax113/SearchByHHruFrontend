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
        <div className="text-blue-500 text-xl border-t-1-emerald">
            {!arrPageButtonVisible.includes(1 || 2 || 3) && (<>
                <span className="px-2 py-0.5 cursor-pointer hover:border-x hover:border-emerald-400" onClick={resetPage} >{'«'}</span>
                <span className="px-2 py-0.5 cursor-pointer hover:border-x hover:border-emerald-400" onClick={() => onClickHandle(page - 1)} >{'‹'}</span>
            </>
            )}

            <span>
                {arrPageButtonVisible.map((value: number) =>
                    <span
                        className={`px-2 py-0.5 cursor-pointer hover:border-x hover:border-emerald-400 ${page === value && 'text-emerald-400 border-emerald-400 border'}`}
                        onClick={() => onClickHandle(value)}>
                        {value}
                    </span>
                )}
            </span>

            {!arrPageButtonVisible.includes(maxPage) && (
                <>
                    <span className="px-2 py-0.5 cursor-pointer hover:border-x hover:border-emerald-400" onClick={() => onClickHandle(page + 1)} >{'›'}</span>
                    <span className="px-2 py-0.5 cursor-pointer hover:border-x hover:border-emerald-400" onClick={lastPage} >{'»'}</span>
                </>
            )}
        </div>

    )
}

export default ListPage