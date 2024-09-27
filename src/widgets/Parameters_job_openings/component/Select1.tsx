import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../model/reducer'
import { setRegions, setRegionsArray, setRegionSelected } from '../model/params-reducer'


const Select1: FC<any> = ({regions}): any => {
    let [city, setCity] = useState('Россия')
    const dispatch: any = useDispatch<AppDispatch>()

    return (
        <select  className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required value={city} onChange={e => {
                        setCity(e.target.value)
                        dispatch(setRegionsArray(e.target.value))
                        }}>
            {(regions.length > 0 && regions) ? regions.map((x: any) => <option value={x.name} >{x.name}</option>) : <div>Загрузка</div>}
        </select>
    )
}

export default Select1
