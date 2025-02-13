import { useSelector } from "react-redux"
import { IRootState } from "../../../app/model/reducer"
import { IRequestBody } from "../../../pages/list-vacancyes-page/type/TypeParameters"
import GetCookie from "../../../shared/utils/GetCookie"
import { useEffect, useState } from "react"


const useCreatingQueryParameters = () => {
    let page = useSelector<IRootState, number>(state => state.pages.page)
    let text = useSelector<IRootState, string>(state => state.jobOpeningReducer.text)

    let body = useSelector<IRootState, IRequestBody>(state => state.params.requestBody)
    let per_page = useSelector<IRootState, number>(state => state.pages.per_page_max)
    let token = GetCookie('token')
    let bodyRequest = token ? { page, per_page, text, ...body, token } : null
    let [queryParams, setQueryParams] = useState('')
    useEffect(() => {
        if (bodyRequest) {
            let filterRequestObject: IRequestBody = Object.entries(bodyRequest).reduce((acc: any, [key, value]) => {
                if (Array.isArray(value)) {
                    value.forEach((item) => acc.append(key, item));
                } else {
                    acc.append(key, value);
                }
                return acc;
            }, new URLSearchParams());

            let queryParams: string = `?${filterRequestObject.toString()}`;

            setQueryParams(queryParams)
        }
    }, [bodyRequest])
    return queryParams

}

export default useCreatingQueryParameters