import { FC, useState } from 'react'
import { useParameters } from '../hooks/useParametersContext'

interface Input {
    typeInput: string
    text?: string
    value: string
    id: string
    name: string
    classLabel: string
    classInput: string
}

const Input: FC<Input> = ({ typeInput, value, text, id, name, classLabel, classInput }) => {
    let { parameters, updateParameter } = useParameters()
    let [status, setStatus] = useState<boolean>(false)

    const handleClick = (e: any) => {
        setStatus(!status) 
        
        switch (typeInput) {
            case 'radio':
                switch (value) {
                    case 'Нет опыта':
                        updateParameter({ workExperience: { noExp: true, minExp: false, maxExp: false } })
                        break;
                    case '1-3':
                        updateParameter({ workExperience: { noExp: false, minExp: true, maxExp: false } })
                        break;
                    case '3+':
                        updateParameter({ workExperience: { noExp: false, minExp: false, maxExp: true } })
                        break;
                }
                break;
            case 'button':
                switch (value) {
                    case 'Полный':
                        updateParameter({ workSchedule: { ...parameters.workSchedule, full: !status } })   
                        break;
                    case 'Сменный':
                        updateParameter({ workSchedule: { ...parameters.workSchedule, replaceable: !status } }) 
                        break;
                    case 'Удаленынй':
                        updateParameter({ workSchedule: { ...parameters.workSchedule, remote: !status } }) 
                        break;
                }
                break;
                
        }
    }
console.log(parameters.workSchedule)
    return (
        <label htmlFor={id} className={classLabel}>
            <input type={typeInput} id={id} name={name} value={value} className={!status ? classInput : `${classInput} text-orange-500 border-b-1`} onClick={handleClick} />{text}
        </label>
    )
}

export default Input
