import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../../app/model/reducer"
import { setPage } from "../../../pages/model/pages-reducer"
import { IUseResetPage } from "../type/ISearch"


const useResetPage = ({pages, resetPages, setResetPages}: IUseResetPage) => {
    const dispatch = useDispatch<AppDispatch>()
    

    useEffect(()=> {
        if (pages) {
        console.log(pages, resetPages, 'UseReset')
           dispatch(setPage(!resetPages ? pages : { ...pages, page: 0 }))
           setResetPages(false) 
        }
    }, [pages])
}

export default useResetPage