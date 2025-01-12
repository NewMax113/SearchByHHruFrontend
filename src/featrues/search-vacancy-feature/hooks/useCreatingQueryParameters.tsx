import { useEffect } from "react"
import { useSelector } from "react-redux"
import { IRootState } from "../../../app/model/reducer"
import { IRequestBody } from "../../../pages/type/TypeParameters"
import useGetCookie from "../../../shared/hooks/useGetCookie"
import { IUseCreatingQueryParameters } from "../type/ISearch"


const useCreatingQueryParameters = ({resetPages, text, setResetPages}: IUseCreatingQueryParameters) => {
    let page = useSelector<IRootState, number>(state => !resetPages ? state.pages.page : 0)

    let body = useSelector<IRootState, IRequestBody>(state => state.params.requestBody)
    let per_page = useSelector<IRootState, number>(state => state.pages.per_page_max)
    let token = useGetCookie('token', true)
    let bodyRequest = { page, per_page, text, ...body, token }

    let filterRequestObject: IRequestBody = Object.entries(bodyRequest).reduce((acc: any, [key, value]) => {
        if (Array.isArray(value)) {
            value.forEach((item) => acc.append(key, item));
        } else {
            acc.append(key, value);
        }
        return acc;
    }, new URLSearchParams());

    let queryParams: string = filterRequestObject.toString();

    useEffect(() => {
        console.log('Вызов body')
        setResetPages(true)
    }, [body])

    return queryParams
}

export default useCreatingQueryParameters