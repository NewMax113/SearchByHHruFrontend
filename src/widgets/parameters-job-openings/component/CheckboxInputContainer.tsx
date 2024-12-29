import React, { ChangeEvent, FC } from 'react'
import { Input } from '../../../ui'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, IRootState } from '../model/reducer'
import { setWorkScheduleRedux } from '../model/params-reducer'

interface IInput {
    typeInput: string
    value: string
    id: string
    name: string
    classLabel: string
    classButton: string
}

const CheckboxInputContainer: FC<IInput> = ({ typeInput, value, id, name, classLabel, classButton }) => {
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

export default CheckboxInputContainer
