import { FC } from "react"
import { Button } from "../../../shared/ui"
import { useDispatch } from "react-redux"
import { AppDispatch } from "../../../app/model/reducer"
import { resetBodyRequest, setBodyRequest } from "../../../pages/model/parameters-reducer"
import { newPage } from "../../../pages/model/pages-reducer"

const ButtonParametersVacancy: FC<{ status: string }> = ({ status }) => {
    const dispatch = useDispatch<AppDispatch>()
    if (status === 'addParams') {
        return (
            <Button classButton={"bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"} text={'Принять'} onClick={() => {
                dispatch(setBodyRequest(),
                    dispatch(newPage(0)))
            }

            }></Button>
        )
    }

    return (
        <Button classButton={"bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"} text={'Сбросить'} onClick={() => {
            dispatch(resetBodyRequest(),
                dispatch(newPage(0)))
        }

        }></Button>
    )


}

export default ButtonParametersVacancy