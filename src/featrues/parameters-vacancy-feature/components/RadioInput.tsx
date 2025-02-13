import { ChangeEvent, FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input } from '../../../shared/ui'
import { AppDispatch, IRootState } from '../../../app/model/reducer'
import { setWorkExperienceRedux } from '../../../pages/list-vacancyes-page/model/parameters-reducer'
import { IRadioInput } from '../type/TypesParametersVacancy'


const RadioInput: FC<IRadioInput> = ({ typeInput, value, id, name, classLabel, classInput }) => {
    let experience = useSelector<IRootState, string>(state => state.params.experience)

    const dispatch = useDispatch<AppDispatch>()

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
