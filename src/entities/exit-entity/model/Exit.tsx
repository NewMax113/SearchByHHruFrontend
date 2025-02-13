import { FC } from "react"
import { Button } from "../../../shared/ui"
import DeleteCookie from "../../../shared/utils/DeleteCookie"
import { useNavigate } from "react-router"


const Exit: FC = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        DeleteCookie('token')
        navigate('/auth')
    }
    
    return (
        <Button
            text="Выход"
            key={'exti'}
            classButton="mx-1 mt-1 ml-auto font-semibold tracking-wide bg-blue-500 text-white px-4 py-2 hover:bg-sky-600 right-0 rounded-md mt-1 "
            onClick={handleClick}
        />
    )
}

export default Exit