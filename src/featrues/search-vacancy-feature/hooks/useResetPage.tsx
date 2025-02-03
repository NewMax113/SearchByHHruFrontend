import { useEffect } from "react"
import { IUseResetPage } from "../type/ISearch"


const useResetPage = ({pages, setResetPages}: IUseResetPage) => {

    useEffect(()=> {
        if (pages) {
           setResetPages(false) 
        }
    }, [pages])
}

export default useResetPage