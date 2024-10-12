import { useState } from 'react'
import { ChangeEvent } from 'react'

const InputValue = () => {
    let [value, setValue] = useState<any>('')

    const valueInput = (e: ChangeEvent<HTMLInputElement>) => {
        let num:string | number = parseInt(e.target.value.replace(/\D/g, ''));
        console.log(Number.isNaN(num))
        num = Number.isNaN(num) ? '' : num.toLocaleString()
        num.length <= 10 && num[0] !== '0' && setValue(`${num}`) 
    }

    return (
        <input type="text" value={value}
            className="border-b-2 border-gray-400 text-center p-0.5 focus:outline-none focus:border-blue-400 mt-1 w-2/5" onChange={valueInput} />
    )
}

export default InputValue

