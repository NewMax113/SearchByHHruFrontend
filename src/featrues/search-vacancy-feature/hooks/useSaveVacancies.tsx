import useCreatingQueryParameters from "./useCreatingQueryParameters"
import { useFetchSearchResultsQuery } from "./useFetchSearchResultsQuery"
import useRedirectRequestResponse from "./useRedirectRequestResponse"
import { ISearchContainer } from "../type/ISearch"

const useSaveVacancies = ({setBeingVacansies, setLoading}: ISearchContainer) => {
    const url = useCreatingQueryParameters()

    const { data, error } = useFetchSearchResultsQuery({
        url,
        method: 'GET',
        headers: {
            'User-Agent': 'JobSearch (maxim0ruseev@gmail.com)',
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    })

    console.log(data)

    if (error) {
        console.log(error)
        setBeingVacansies(false)
    } else {
        setBeingVacansies(true)
    }

    useRedirectRequestResponse({ data, setLoading })
}

export default useSaveVacancies