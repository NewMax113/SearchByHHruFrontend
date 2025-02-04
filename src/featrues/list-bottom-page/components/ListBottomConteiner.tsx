import { FC, useMemo, useState } from "react"
import { useSelector } from "react-redux"
import { AppDispatch, IRootState } from "../../../app/model/reducer"
import { useDispatch } from "react-redux"
import { newPage } from "../../../pages/list-vacancyes-page/model/pages-reducer"
import ListPage from "../../../entities/list-bottom-entity/model/ListPage"
import { IListBottomConteiner } from "../type/TypeListBottomContainer"
import { MAX_PAGE_VISIBLE } from "../config/constants"


const ListBottomConteiner: FC<IListBottomConteiner> = ({ setLoading }) => {
    let maxPageVisible = MAX_PAGE_VISIBLE
    let page = useSelector<IRootState, number>(state => state.pages.page + 1)
    let maxPage = useSelector<IRootState, number>(state => state.pages.pages)
    let [arrPageButtonVisible, setArrPageButtonVisible] = useState<number[]>([])

    const dispatch = useDispatch<AppDispatch>()

    useMemo(() => {
        setArrPageButtonVisible([])
        if (maxPage < maxPageVisible) {
            for (let index = 1; maxPage + 1 > index; index++) {
                setArrPageButtonVisible((arrPageButtonVisible: number[]) => [...arrPageButtonVisible, index])
            }
        } else {
            if (maxPage - page < 4) {
                for (let index = maxPage - maxPageVisible + 1; maxPage + 1 > index; index++) {
                    setArrPageButtonVisible((arrPageButtonVisible: number[]) => [...arrPageButtonVisible, index])
                }
            } else {
                if (page < 5) {
                    for (let index = 1; maxPageVisible + 1 > index; index++) {
                        console.log(index, maxPageVisible)
                        setArrPageButtonVisible((arrPageButtonVisible: number[]) => [...arrPageButtonVisible, index])
                    }
                } else {
                    for (let index = page - 3; page + 4 > index; index++) {
                        setArrPageButtonVisible((arrPageButtonVisible: number[]) => [...arrPageButtonVisible, index])
                    }
                }
            }
        }
    }, [page, maxPage])


    const onClickHandle = (value: number) => {
        dispatch(newPage(value - 1))
        setLoading(true)
    }

    const resetPage = () => {
        dispatch(newPage(0))
        setLoading(true)
    }

    const lastPage = () => {
        dispatch(newPage(maxPage - 1))
        setLoading(true)
    }

    return (
        <ListPage
            arrPageButtonVisible={arrPageButtonVisible}
            page={page}
            maxPage={maxPage}
            onClickHandle={onClickHandle}
            resetPage={resetPage}
            lastPage={lastPage}
        />
    )
}

export default ListBottomConteiner