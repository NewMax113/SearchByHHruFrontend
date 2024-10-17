import React, { FC } from 'react'

interface Input {
    type: string
    text?: string
    value: string
    id: string
    name: string
    classLabel: string
    classInput: string
}

const Input: FC<Input> = ({type, value, text, id, name, classLabel, classInput}) => {
    return (
        <label htmlFor={id} className={classLabel}>
            <input type={type} id={id} name={name} value={value} className={classInput}/>{text}
        </label>
    )
}

export default Input
