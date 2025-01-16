import { FC, useEffect, useState } from 'react'
import { ChangeEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useSearchWord from '../hooks/useSearchWord'
import { setCityRedux } from '../../../pages/model/parameters-reducer'
import { AppDispatch, IRootState } from '../../../app/model/reducer'
import { CityModalEntity } from '../../../entities'
import { ICity, IList } from '../type/TypesParametersVacancy'


const City: FC<{ id: string }> = ({ id }) => {
    let listCities = useSelector<IRootState, IList[]>(state => state.params.listCities)
    let city = useSelector<IRootState, ICity>(state => state.params.city)
    let [text, setText] = useState<string>(city.city || '')
    let sortCities = useSearchWord({listCities, text})

    const dispatch = useDispatch<AppDispatch>()

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
        <CityModalEntity id={id} text={text} textInput={textInput} checkingValidityCity={checkingValidityCity} sortCities={sortCities} listCities={listCities} />
    )
}

export default City
