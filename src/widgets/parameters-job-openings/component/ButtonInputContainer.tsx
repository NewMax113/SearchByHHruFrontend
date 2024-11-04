import React, { FC, useEffect, useState } from 'react'
import { useParameters } from '../../../hooks/useParametersContext'
import { Input } from '../../../ui'

interface IInput {
    typeInput: string
    text?: string
    value: string
    id: string
    name: string
    classLabel: string
    classButton: string
}

const ButtonInputContainer: FC<IInput> = ({ typeInput, value, text, id, name, classLabel, classButton }) => {
    let { parameters, updateParameter } = useParameters()
    let [status, setStatus] = useState<boolean>(false)

    const handleClick = () => {
        switch (value) {
            case 'Полный':
                updateParameter({ workSchedule: { ...parameters.workSchedule, full: !parameters.workSchedule.full } })
                console.log(!parameters.workSchedule.full)
                setStatus(!parameters.workSchedule.full)
                break;
            case 'Сменный':
                updateParameter({ workSchedule: { ...parameters.workSchedule, replaceable: !parameters.workSchedule.replaceable } })
                console.log(!parameters.workSchedule.replaceable)
                setStatus(!parameters.workSchedule.replaceable)
                break;
            case 'Удаленынй':
                updateParameter({ workSchedule: { ...parameters.workSchedule, remote: !parameters.workSchedule.remote } })
                console.log(!parameters.workSchedule.remote)
                setStatus(!parameters.workSchedule.remote)
                break;
        }
    }

    useEffect(() => {
        switch (value) {
            case 'Полный':
                setStatus(parameters.workSchedule.full)
                break;
            case 'Сменный':
                setStatus(parameters.workSchedule.replaceable)
                break;
            case 'Удаленынй':
                setStatus(parameters.workSchedule.remote)
                break;
        }
    }, [parameters])

    return (
        <label htmlFor={id} className={classLabel}>
            <Input typeInput={typeInput} id={id} name={name} value={value} classInput={!status ? classButton : `${classButton} text-orange-500 border-b-1`} onClickInput={handleClick} />
            {text}
        </label>
    )
}

export default ButtonInputContainer
