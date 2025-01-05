import { ChangeEvent, FC } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch, IRootState } from '../../../widgets/parameters-job-openings/model/reducer'
import { useSelector } from 'react-redux'
import { setWorkExperienceRedux } from '../../../widgets/parameters-job-openings/model/params-reducer'
import { Input } from '../../../shared/ui'


interface IInput {
    typeInput: string
    text?: string
    value: string
    name: string
    id: string
    classLabel: string
    classInput: string
}

const RadioInput: FC<IInput> = ({ typeInput, value, id, name, classLabel, classInput }) => {
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

export default RadioInput
