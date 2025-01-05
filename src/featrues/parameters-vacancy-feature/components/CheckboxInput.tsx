import React, { ChangeEvent, FC } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch, IRootState } from '../../../widgets/parameters-job-openings/model/reducer'
import { useSelector } from 'react-redux'
import { setWorkScheduleRedux } from '../../../widgets/parameters-job-openings/model/params-reducer'
import { Input } from '../../../shared/ui'


interface IInput {
    typeInput: string
    value: string
    id: string
    name: string
    classLabel: string
    classButton: string
}

const CheckboxInput: FC<IInput> = ({ typeInput, value, id, name, classLabel, classButton }) => {
    const dispatch: any = useDispatch<AppDispatch>()
    let schedule = useSelector<IRootState, string[]>(state => state.params.schedule)

    const handleClick = (e: ChangeEvent<HTMLInputElement>) => {
        schedule.includes(e.target.value) 
        ? dispatch(setWorkScheduleRedux([...schedule, e.target.value].filter((element: string)=> element !== e.target.value)))
        : dispatch(setWorkScheduleRedux([...schedule, e.target.value]))
    }
    console.log(schedule)

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
