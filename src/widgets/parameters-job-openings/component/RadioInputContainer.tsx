import { FC, useEffect, useState } from 'react'
import { useParameters } from '../../../hooks/useParametersContext'
import Input from '../../../ui/Input'


interface IInput {
    typeInput: string
    text?: string
    value: string
    id: string
    name: string
    classLabel: string
    classInput: string
}

const RadioInputContainer: FC<IInput> = ({ typeInput, value, text, id, name, classLabel, classInput }) => {
    let { parameters, updateParameter } = useParameters()
    let arg = ''
    let [radio, setRadio] = useState<any>({ noExp: false, minExp: false, maxExp: false })

    switch (value) {
        case 'Нет опыта':
            arg = 'noExp'
            break;
        case '1-3':
            arg = 'minExp'
            break;
        case '3+':
            arg = 'maxExp'
            break;
    }

    const handleClick = () => {
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
    }

    useEffect(() => {
        setRadio({ ...parameters.workExperience })
    }, [parameters])

    return (
        <div className="px-2">
            <label htmlFor={id} className={classLabel}>
                <Input typeInput={typeInput} checkedInput={radio[arg]} id={id} name={name} value={value} classInput={classInput} onClickInput={handleClick} />
                {text}
            </label>
        </div>
    )
}

export default RadioInputContainer
