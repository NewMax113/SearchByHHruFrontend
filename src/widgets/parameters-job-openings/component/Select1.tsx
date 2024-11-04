import React, { FC, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, IRootState } from '../model/reducer'
import { setRegionsArray } from '../model/params-reducer'
import { useParameters } from '../../../hooks/useParametersContext'
import { Select } from '../../../ui'

//НЕ РАБОТАЕТ ВЫБОР СТРАНЫ!\\
const Select1: FC<any> = ({ regions }): any => {
    let paramenersRedux = useSelector<IRootState, any>(state => state.params.parameters)
    let [value, setValue] = useState<string[]>([])
    let [city, setCity] = useState(paramenersRedux.country)
    console.log(city)

    const { updateParameter } = useParameters();
    const setParams = () => {
        updateParameter({ country: city })
    }
    const dispatch: any = useDispatch<AppDispatch>()
    

    useEffect(() => {
        for (let index = 0; index < regions.length; index++) {
            console.log(regions)
            setValue(value => [...value, regions[index].name])
        }
    }, [regions])


    return (
        <Select
            text={value}
            required={true}
            valueSelect={city}
            valueOption={value}
            classSelect='border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400'
            onChange={e => {
                setCity(e.target.value);
                dispatch(setRegionsArray(e.target.value));
                setParams();
            }}
        />
    )
}

export default Select1

// import React, { FC, useState } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { AppDispatch, IRootState } from '../model/reducer'
// import { setRegions, setRegionsArray, setRegionSelected } from '../model/params-reducer'
// import { useParameters } from '../../../hooks/useParametersContext'

// const Select1: FC<any> = ({regions}): any => {
//     let paramenersRedux = useSelector<IRootState, any>(state => state.params.parameters)
//     let [city, setCity] = useState(paramenersRedux.country)
//     const { updateParameter } = useParameters();
//     const setParams = () => {
//         updateParameter({country: city})
//     }
//     const dispatch: any = useDispatch<AppDispatch>()

//     return (
//         <select className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required value={city} onChange={e => {
//                         setCity(e.target.value)
//                         dispatch(setRegionsArray(e.target.value))
//                         setParams()
//                         }}>
//             {(regions.length > 0 && regions) ? regions.map((x: any) => <option value={x.name} >{x.name}</option>) : <div>Загрузка</div>}
//         </select>
//     )
// }

// export default Select1


