import { FC, useState, ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, IRootState } from '../../../widgets/parameters-job-openings/model/reducer';
import { setEarningRedux } from '../../../widgets/parameters-job-openings/model/params-reducer';
import { Input } from '../../../shared/ui';


const Salary: FC<{id: string}> = ({id}) => {
    const dispatch: any = useDispatch<AppDispatch>()
    let salary = useSelector<IRootState, string>(state => state.params.salary)
    let [value, setValue] = useState<string>(salary)

    const setValueInput = (e: ChangeEvent<HTMLInputElement>) => {
        let valueInput = validation(e.target.value)
        valueInput.length <= 10 && valueInput[0] !== '0' && setValue(`${valueInput}`)
    }

    const setParams = () => {
        dispatch(setEarningRedux(value.replace(/\D/g, '')))
    }

    const validation = (argument: any) => {
        let value: number = parseInt(argument.replace(/\D/g, ''));
        let string: string = Number.isNaN(value) ? '' : value.toLocaleString()
        return string
    }

    return (
        <Input
            id={id}
            key={id}
            value={validation(value)}
            typeInput={'text'}
            onBlur={setParams}
            onChange={setValueInput}
            classInput={"border-b-2 border-gray-400 text-center p-0.5 focus:outline-none focus:border-blue-400 w-2/5"}
        />
    )
}

export default Salary

