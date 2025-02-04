import { ChangeEvent, FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Input } from '../../../shared/ui'
import { AppDispatch, IRootState } from '../../../app/model/reducer'
import { setWorkScheduleRedux } from '../../../pages/list-vacancyes-page/model/parameters-reducer'
import { ICheckboxInput } from '../type/TypesParametersVacancy'


const CheckboxInput: FC<ICheckboxInput> = ({ typeInput, value, id, name, classLabel, classButton }) => {
    let schedule = useSelector<IRootState, string[]>(state => state.params.schedule)

    const dispatch = useDispatch<AppDispatch>()
    const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
        schedule.includes(e.target.value) 
        ? dispatch(setWorkScheduleRedux([...schedule, e.target.value].filter((element: string)=> element !== e.target.value)))
        : dispatch(setWorkScheduleRedux([...schedule, e.target.value]))
    }

    return (
        <>
            <label htmlFor={id} className={classLabel}>
            <Input
                typeInput={typeInput}
                checkedInput={schedule.includes(value)}
                id={id}
                name={name}
                value={value}
                classInput={classButton}
                onChange={handleClick}
            />
            {id}
            </label>
        </>
    )
}

export default CheckboxInput