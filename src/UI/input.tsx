import React, { FC } from 'react'

interface Input {
    type: string
    value: string
    id: string
    name: string
    classLabel: string
    classInput: string
}

const Input: FC<Input> = ({type, value, id, name, classLabel, classInput}) => {
    return (
        <label htmlFor={id} className={classLabel}>
            <input type={type} id={id} name={name} value={value} className={classInput} />{value}
        </label>
    )
}

export default Input
