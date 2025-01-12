import { FC } from "react"
import { Button } from "../../../shared/ui"
import { useDispatch } from "react-redux"
import { AppDispatch, IRootState } from "../../../app/model/reducer"
import { setBodyRequest } from "../../../pages/model/parameters-reducer"
import { IDataSearch, IDataSearchFetch } from "../../search-vacancy-feature/type/ISearch"
import useFetch from "../../../shared/hooks/useFetch"
import useCreatingQueryParameters from "../../search-vacancy-feature/hooks/useCreatingQueryParameters"
import { useSelector } from "react-redux"

const ButtonParametersVacancy: FC = () => {
    const dispatch = useDispatch<AppDispatch>()
    // let text = useSelector<IRootState, string>(state => state.jobOpeningReducer.text)
    // const queryParams = useCreatingQueryParameters({resetPages, setResetPages, text})

    // let { data, error }: IDataSearchFetch = useFetch<IDataSearch>({
    //     url: 'http://localhost:3001/',
    //     linkBody: queryParams,
    //     method: 'GET',
    //     headers: {
    //       'User-Agent': 'JobSearch (maxim0ruseev@gmail.com)',
    //       'Content-Type': 'application/x-www-form-urlencoded'
    //     }
    //   })

    return (
        <Button classButton={"bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"} text={'Принять'} onClick={() => (dispatch(setBodyRequest()))}></Button>
    )
}

export default ButtonParametersVacancy