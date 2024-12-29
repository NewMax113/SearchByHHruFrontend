import { FC } from 'react'
import { ISelect } from '../app/type/type'

const Select: FC<ISelect> = ({ id, name, classSelect, required, valueOption, text, onChange }) => {
    return (
        <select
            id={id}
            key={id}
            name={name}
            required={required}
            className={classSelect}
            onChange={onChange}
        >
            {valueOption.map((valueOption) =>
                <option
                    key={valueOption}
                    value={valueOption}>
                    {valueOption}
                </option>)}
        </select>
    )
}

export default Select
