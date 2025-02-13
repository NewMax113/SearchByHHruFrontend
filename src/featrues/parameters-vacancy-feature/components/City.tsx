import { FC, useState } from 'react'
import { ChangeEvent } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import useSearchWord from '../hooks/useSearchWord'
import { setCityRedux } from '../../../pages/list-vacancyes-page/model/parameters-reducer'
import { AppDispatch, IRootState } from '../../../app/model/reducer'
import { ICity, IList } from '../type/TypesParametersVacancy'
import useResetCity from '../hooks/useResetCity'
import { DataList, Input } from '../../../shared/ui'


const City: FC<{ id: string }> = ({ id }) => {
    let listCities = useSelector<IRootState, IList[]>(state => state.params.listCities)
    let city = useSelector<IRootState, ICity>(state => state.params.city)
    let [text, setText] = useState<string>(city.city || '')
    let sortCities = useSearchWord({listCities, text})

    const dispatch = useDispatch<AppDispatch>()

    useResetCity({listCities, city, setText})

    const textInput = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    let checkingValidityCity = () => {
        if (text === sortCities[0]?.name) {
            dispatch(setCityRedux({ id: sortCities[0].id || null, city: sortCities[0].name || null }))

        } else if (text.length > 0) {
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
        <>
            <Input
                id={id}
                value={text}
                typeInput='text'
                list='list-country'
                onChange={textInput}
                onBlur={checkingValidityCity}
                classInput='border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400 hover:border-emerald-400'
            />
            <DataList
                text={text}
                id={'list-country'}
                className={'border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400'}
                arrValues1={sortCities}
                arrValues2={listCities}
            />
        </>
    )
}

export default City
