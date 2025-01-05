import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../../widgets/parameters-job-openings/model/reducer"
import { setPage } from "../../../widgets/search-job-openings/model/redux/pages-reducer"
import { setListVacancies } from "../../../widgets/search-job-openings/model/job-opening-reducer"

const useRedirectRequestResponse = (selectedVacancies: any, setResetPages: any, resetPages: any, setLoading: any) => {
  const dispatch: any = useDispatch<AppDispatch>()
    useEffect(() => {
        if (selectedVacancies) {
          const requestResponse = async () => {
            await dispatch(setPage(!resetPages ? selectedVacancies.pages : { ...selectedVacancies.pages, page: 0 }))
            await dispatch(setListVacancies(selectedVacancies.items))
            setResetPages(false)
            setLoading(false)
          }
          requestResponse()
        }
      }, [selectedVacancies])
}

export default useRedirectRequestResponse