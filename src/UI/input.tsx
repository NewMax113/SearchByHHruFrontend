import { FC } from 'react'
import { IInput } from '../app/type/type'

const Input: FC<IInput> = ({
    id,
    name,
    list,
    value,
    onBlur,
    onchange,
    typeInput,
    classInput,
    placeholder,
    onClickInput,
    checkedInput,
}) => {

    return (
        <input
            id={id}
            name={name}
            list={list}
            value={value}
            onBlur={onBlur}
            type={typeInput}
            onChange={onchange}
            className={classInput}
            onClick={onClickInput}
            checked={checkedInput}
            placeholder={placeholder}
        />
    )
}

//Изменить везде onchange, onclick на onChange, onClick

export default Input
