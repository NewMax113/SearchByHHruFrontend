import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../../app/model/reducer"
import { setListVacancies } from "../../../pages/model/job-opening-reducer"
import { IUseRedirectRequestResponse } from "../type/ISearch"
import { setPage } from "../../../pages/model/pages-reducer"

const useRedirectRequestResponse = ({data, setLoading} : IUseRedirectRequestResponse) => {
  const dispatch = useDispatch<AppDispatch>()

    useEffect(() => {
        if (data) {
          const requestResponse = () => {
            dispatch(setPage(data.pages))
            dispatch(setListVacancies(data.items))   
            setLoading(false)
          }
          requestResponse()
        }
      }, [data])
}

export default useRedirectRequestResponse