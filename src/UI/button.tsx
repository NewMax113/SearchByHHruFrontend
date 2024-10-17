import { FC } from "react"

interface IButton {
    style: string
    text: string
    onClickF?: () => void
}

const Button: FC<IButton> = ({style, text, onClickF}) => {
    return (
        <button className={`${style}`} onClick={onClickF}>
            {text}
        </button>
    )
}

export default Button