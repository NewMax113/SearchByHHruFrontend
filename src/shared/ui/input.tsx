import { FC } from 'react'
import { IInput } from '../type/type'


const Input: FC<IInput> = ({
    id,
    name,
    list,
    value,
    onBlur,
    onChange,
    typeInput,
    classInput,
    placeholder,
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
            onChange={onChange}
            className={classInput}
            checked={checkedInput}
            placeholder={placeholder}
        />
    )
}

export default Input
