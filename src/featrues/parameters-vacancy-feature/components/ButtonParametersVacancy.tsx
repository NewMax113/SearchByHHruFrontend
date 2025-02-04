import { FC } from "react"
import { Button } from "../../../shared/ui"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../../app/model/reducer"
import { resetBodyRequest, setBodyRequest } from "../../../pages/list-vacancyes-page/model/parameters-reducer"
import { newPage } from "../../../pages/list-vacancyes-page/model/pages-reducer"

const ButtonParametersVacancy: FC<{ status: string }> = ({ status }) => {
    const dispatch = useDispatch<AppDispatch>()
    const styleButton = "bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
    
    if (status === 'addParams') {
        return (
            <Button classButton={styleButton} text={'Принять'} onClick={() => {
                dispatch(setBodyRequest(),
                    dispatch(newPage(0)))
            }} />
        )
    }

    return (
        <Button classButton={styleButton} text={'Сбросить'} onClick={() => {
            dispatch(resetBodyRequest(),
                dispatch(newPage(0)))
        }} />
    )
}

export default ButtonParametersVacancy