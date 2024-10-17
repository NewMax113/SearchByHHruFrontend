import React, { FC, useEffect, useState } from 'react'
import { ChangeEvent } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../model/reducer'
import { observAllCities } from '../model/params-reducer'
import { useParameters } from '../../../hooks/useParametersContext'

interface Select {
    city: any
    classLabel: string
    nameLabel: string
    htmlFor: string
}
const Select2: FC<Select> = ({ city }) => {
    const dispatch: any = useDispatch<AppDispatch>()
    let [text, setText] = useState<string>('')
    const { parameters, updateParameter } = useParameters();
    const textInput = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('СРАБОТАЛО!', e.target.value)
        setText(e.target.value)
        
    }

    useEffect(()=> {
        if (city.length === 1) {
            updateParameter({ city: city[0] })
        }
    }, [city])

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
            <input
                className='border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400'
                list="ice-cream-flavors"
                id="ice-cream-choice"
                name="ice-cream-choice"
                onChange={textInput}
            />
            <datalist className='border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400' id="ice-cream-flavors">
                {(city.length > 0 && city)
                    ? city.map((x: any) => <option value={x}>{x}</option>)
                    : <div>Загрузка</div>}
            </datalist>
        </div>

    )
}

export default Select2
