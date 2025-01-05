import { FC, useEffect, useState } from 'react'
import { ChangeEvent } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { AppDispatch, IRootState } from '../../../widgets/parameters-job-openings/model/reducer'
import useSearchWord from '../hooks/useSearchWord'
import { setCityRedux } from '../../../widgets/parameters-job-openings/model/params-reducer'
import CityModalEntity from '../../../entities/parameters-entity/model/CityModelEntity'


const City: FC<{ id: string }> = ({ id }) => {
    const dispatch: any = useDispatch<AppDispatch>()
    let listCities = useSelector<IRootState, any>(state => state.params.listCities)
    let city = useSelector<IRootState, any>(state => state.params.city)
    let [text, setText] = useState<string>(city.city)
    let sortCities = useSearchWord(listCities, text)

    useEffect(() => {
        if (listCities.length > 0) {
            if (!city?.city) {
                setText('')
            }
        }
    }, [listCities])

    const textInput = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    let checkingValidityCity = () => {
        if (text === sortCities[0]?.name) {
            dispatch(setCityRedux({ id: sortCities[0].id || null, city: sortCities[0].name || null }))

        } else {
            alert('Вы ввели некорректные данные')
            setText('')
            dispatch(setCityRedux({ id: null, city: null }))

            if (sortCities.length === 1) {
                alert(`Могу предложить ${sortCities[0].name}`)
                setText(sortCities[0].name)
                dispatch(setCityRedux({ id: sortCities[0].id || null, city: sortCities[0].name || null }))
            }
        }
    }

    return (
        <CityModalEntity id={id} text={text} textInput={textInput} checkingValidityCity={checkingValidityCity} sortCities={sortCities} listCities={listCities}/>
    )
}

export default City
