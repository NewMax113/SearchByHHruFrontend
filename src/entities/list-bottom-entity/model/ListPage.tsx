import { FC } from "react"
import { IListPage } from "../type/TypeListPage"
import SpanAction from "../ui/PaginationButton"
import PaginationContainer from "../ui/PaginationContainer"


const ListPage: FC<IListPage> = ({
    arrPageButtonVisible,
    page,
    maxPage,
    onClickHandle,
    resetPage,
    lastPage
}) => {
    const spanTextStyle = "px-2 py-0.5 cursor-pointer hover:border-x hover:border-emerald-400"

    return (
        <PaginationContainer>
            {!arrPageButtonVisible.includes(1) && (
                <>
                    <SpanAction className={spanTextStyle} callback={resetPage} value={'«'} />
                    <SpanAction className={spanTextStyle} callback={() => onClickHandle(page - 1)} value={'‹'} />
                </>
            )}

            {arrPageButtonVisible.map((value: number) =>
                <SpanAction
                    className={`${spanTextStyle} ${page === value && 'text-emerald-400 border-emerald-400 border'}`}
                    callback={() => onClickHandle(value)}
                    value={value} />
            )}

            {!arrPageButtonVisible.includes(maxPage) && (
                <>
                    <SpanAction className={spanTextStyle} callback={() => onClickHandle(page + 1)} value={'›'} />
                    <SpanAction className={spanTextStyle} callback={lastPage} value={'»'} />
                </>
            )}
        </PaginationContainer>

    )
}

export default ListPage