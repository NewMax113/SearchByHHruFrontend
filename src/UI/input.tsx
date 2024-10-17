import { FC } from 'react'
import useSwitch from '../hooks/useSwitch'
import { useParameters } from '../hooks/useParametersContext'

interface Input {
    switchInput: boolean
    typeInput: string
    text?: string
    value: string
    id: string
    name: string
    classLabel: string
    classInput: string
}

const Input: FC<Input> = ({ switchInput, typeInput, value, text, id, name, classLabel, classInput }) => {
    let [status, setStatus] = useSwitch(switchInput)
    let { parameters, updateParameter } = useParameters()

    const handleClick = (e: any) => {
        switch (typeInput) {
            case 'radio':
                console.log(parameters.workExperience)
                updateParameter({workExperience: [...parameters.workExperience, e.currentTarget.value]})
                console.log(e.currentTarget.value)
                break;
            case 'button':
                setStatus(!status)
                break;
        }
    }

    return (
        <label htmlFor={id} className={classLabel}>
            <input type={typeInput} id={id} name={name} value={value} className={classInput} onClick={handleClick} />{text}
        </label>
    )
}

export default Input
