import React, { FC, useEffect, useState } from 'react'
import { ChangeEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, IRootState } from '../model/reducer'
import { observAllCities, setRegions, setRegionsArray, setRegionSelected } from '../model/params-reducer'


export const Select2: FC<any> = (city: any): any => {
    const dispatch: any = useDispatch<AppDispatch>()
    let [cityState, setCityState] = useState<string>('')
    let [text, setText] = useState<string>('')
    const textInput = (e: ChangeEvent<HTMLInputElement>) => {
        console.log('СРАБОТАЛО!')
        setText(e.target.value)
    }

    useEffect(()=> {
        if (text) {
            dispatch(observAllCities(text))
            
        } else {
            console.log('ELSE2ELSE2ELSE2ESLE2')
            dispatch(observAllCities(''))
        }
    }, [text])
    

    return (
        // <select  className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required value={cityState} onChange={e => {
        //     setCityState(e.target.value)
        //                 }}>
        //     {city.length > 0 ? city.map((x: any) => <option value={x} >{x}</option>) : <div>Загрузка</div>}
        // </select>
        <div>

            <input
                className='border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400' list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice"
                onChange={textInput}
            />

            <datalist className='border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400' id="ice-cream-flavors">
                {city.city.length > 0 ? city.city.map((x: any) => <option value={x} >{x}</option>) : <div>Загрузка</div>}
            </datalist>
        </div>

    )
}
