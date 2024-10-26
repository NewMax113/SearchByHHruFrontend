import { FC, useState, ChangeEvent } from 'react'
import { useParameters } from '../../../hooks/useParametersContext'
import Input from '../../../ui/Input'

const MoneyInputModalContainer: FC = () => {
    const { parameters, updateParameter } = useParameters();
    let [value, setValue] = useState<any>(parameters.earning)

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
        <Input
            value={value}
            typeInput={'text'}
            onBlur={setParams}
            onchange={valueInput}
            classInput={"border-b-2 border-gray-400 text-center p-0.5 focus:outline-none focus:border-blue-400 mt-1 w-2/5"}
        />
    )
}

export default MoneyInputModalContainer

