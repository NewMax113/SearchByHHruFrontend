import { FC } from 'react'
import { ISelect } from '../app/type/type'

const Select: FC<ISelect> = ({ id, name, classSelect, required, valueSelect, valueOption, text, onChange }) => {
    return (
        <select
            id={id}
            name={name}
            required={required}
            className={classSelect} 
            onChange={onChange}
            value={valueSelect}
            >
            {valueOption.map((valueOption, index) =>
                <option
                    value={valueOption}>
                    {text[index]}
                </option>)}
        </select>
    )
}

export default Select
