import { FC } from "react"
import { IButton } from "../app/type/type"


const Button: FC<IButton> = ({ classButton, text, click }) => {

    return (
        <button type="button" className={classButton} onClick={click}>
            {text}
        </button>
    )
}

export default Button