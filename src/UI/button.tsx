import { FC } from "react"
import { IButton } from "../app/type/type"


const Button: FC<IButton> = ({ classButton, text, onClick }) => {

    return (
        <button type="button" className={classButton} onClick={onClick}>
            {text}
        </button>
    )
}

export default Button