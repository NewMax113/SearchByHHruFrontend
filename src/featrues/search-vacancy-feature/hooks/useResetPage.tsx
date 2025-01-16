import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { AppDispatch, IRootState } from "../../../app/model/reducer"
import { setPage } from "../../../pages/model/pages-reducer"
import { IUseResetPage } from "../type/ISearch"
import { useSelector } from "react-redux"


const useResetPage = ({pages, resetPages, setResetPages}: IUseResetPage) => {
    const dispatch = useDispatch<AppDispatch>()
    //let pageParams = useSelector<IRootState, number>(state => state.params.page)
    

    useEffect(()=> {
        if (pages) {
        console.log(pages, resetPages, 'UseReset')
           //dispatch(setPage({ ...pages, page: 0 }))
           setResetPages(false) 
        }
    }, [pages])
}

export default useResetPage