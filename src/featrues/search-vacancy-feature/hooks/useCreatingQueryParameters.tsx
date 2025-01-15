import { useSelector } from "react-redux"
import { IRootState } from "../../../app/model/reducer"
import { IRequestBody } from "../../../pages/type/TypeParameters"
import useGetCookie from "../../../shared/hooks/useGetCookie"


const useCreatingQueryParameters = () => {
    let page = useSelector<IRootState, number>(state => state.pages.page)
    let text = useSelector<IRootState, string>(state => state.jobOpeningReducer.text)

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

    return queryParams
}

export default useCreatingQueryParameters