import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '../model/reducer'
import { setRegions, setRegionsArray, setRegionSelected } from '../../Parameters_job_openings/model/params-reducer'


export const Select: FC<any> = (regions): any => {
    //console.log(regions.regions)
    let [city, setCity] = useState('Россия')
    const dispatch: any = useDispatch<AppDispatch>()

    return (
        <select value={city} onChange={e => {
                        setCity(e.target.value)
                        dispatch(setRegionsArray(e.target.value))
                        }}>
            {regions.regions.length > 0 ? regions.regions.map((x: any) => <option value={x.name} >{x.name}</option>) : <div>Загрузка</div>}
        </select>
    )
}
