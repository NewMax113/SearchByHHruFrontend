import React, { FC, useEffect, useState } from 'react'
import { ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, IRootState } from '../model/reducer'
import { observAllCities } from '../model/params-reducer'
import { useParameters } from '../../../hooks/useParametersContext'
import Input from '../../../ui/Input'

interface Select {
    city: any
    classLabel: string
    nameLabel: string
    htmlFor: string
}

const Select2: FC<Select> = ({ city }) => {
    const dispatch: any = useDispatch<AppDispatch>()
    let paramenersRedux = useSelector<IRootState, any>(state => state.params.parameters)
    const { parameters, updateParameter } = useParameters();
    let [text, setText] = useState<string>(parameters.city)


    const textInput = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    let checkingValidityCity = () => {
        if (text === city[0]) {
            updateParameter({ city: city[0] })
        } else {
            alert('Вы ввели некорректные данные')
            if (city.length === 1) {
                alert(`Могу предложить ${city[0]}`)
                setText(city[0])
            }
        }
    }

    useEffect(() => {
        if (text) {
            dispatch(observAllCities(text))

        } else {
            console.log('ELSE2ELSE2ELSE2ESLE2')
            dispatch(observAllCities(''))
        }
    }, [text])

    return (
        <div>
            <Input
                typeInput='text'
                classInput='border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400'
                list='ice-cream-flavors'
                id='ice-cream-choice'
                name='ice-cream-choice'
                value={text}
                onChange={textInput}
                onBlur={checkingValidityCity} />
            <datalist className='border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400' id="ice-cream-flavors">
                {(city.length > 0 && city)
                    ? city.map((x: any) => <option value={x}>{x}</option>)
                    : <div>Загрузка</div>}
            </datalist>
        </div>

    )
}

export default Select2
