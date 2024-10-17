import { useState } from 'react'
import { ChangeEvent } from 'react'
import { useParameters } from '../../../hooks/useParametersContext'

const InputValue = () => {
    let [value, setValue] = useState<any>('')
    const { updateParameter } = useParameters();

    const valueInput = (e: ChangeEvent<HTMLInputElement>) => {
        let num: string | number = parseInt(e.target.value.replace(/\D/g, ''));
        console.log(Number.isNaN(num))
        num = Number.isNaN(num) ? '' : num.toLocaleString()
        num.length <= 10 && num[0] !== '0' && setValue(`${num}`)
    }

    const setParams = () => {
        updateParameter({ earning: value })
    }

    return (
        <input
            type="text"
            value={value}
            onBlur={setParams}
            className="border-b-2 border-gray-400 text-center p-0.5 focus:outline-none focus:border-blue-400 mt-1 w-2/5"
            onChange={valueInput} />
    )
}

export default InputValue

