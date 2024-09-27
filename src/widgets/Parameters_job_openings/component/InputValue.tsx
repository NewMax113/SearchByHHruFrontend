import React, {useState} from 'react'
import { ChangeEvent } from 'react'

const InputValue = () => {
//сделать как хук, а из InputValue сделать обычный Input и добавить хук
    let [value, setValue] = useState<string>('')
    const valueInput = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
        setValue(e.target.value)
    }

    return (
        <input placeholder='От' type="number" id="number" name="number"
            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400 mt-1" required onChange={valueInput} />
    )
}

export default InputValue
