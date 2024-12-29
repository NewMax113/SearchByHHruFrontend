import { ChangeEvent, FC } from 'react'
import { Input } from '../../../ui'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, IRootState } from '../model/reducer'
import { setWorkExperienceRedux } from '../model/params-reducer'


interface IInput {
    typeInput: string
    text?: string
    value: string
    name: string
    id: string
    classLabel: string
    classInput: string
}

const RadioInputContainer: FC<IInput> = ({ typeInput, value, id, name, classLabel, classInput }) => {
    const dispatch: any = useDispatch<AppDispatch>()
    let experience = useSelector<IRootState, string>(state => state.params.experience)

    const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setWorkExperienceRedux(e.target.value))
    }
    return (
        <label htmlFor={id} className={classLabel}>
            <Input
                typeInput={typeInput}
                checkedInput={experience === value}
                id={id}
                name={name}
                value={value}
                classInput={classInput}
                onChange={handleClick}
            />
            {id}
        </label>
    )
}

export default RadioInputContainer
