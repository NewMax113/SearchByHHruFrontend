import { FC, useEffect, useState } from 'react'
import { ChangeEvent } from 'react'
import { useSelector } from 'react-redux'
import { AppDispatch, IRootState } from '../model/reducer'
import { Input } from '../../../ui'
import useSearchWord from '../../../hooks/useSearchWord'
import { useDispatch } from 'react-redux'
import { setCityRedux } from '../model/params-reducer'


const CitySelectionContainer: FC<{ id: string }> = ({ id }) => {
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
        <>
            <Input
                id={id}
                value={text}
                typeInput='text'
                list='list-country'
                onChange={textInput}
                onBlur={checkingValidityCity}
                classInput='border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400'
            />
            <datalist
                key={text}
                id='list-country'
                className='border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400'
            >
                {((sortCities.length > 0 && sortCities)
                    ? sortCities
                    : listCities)
                    .map((x: any) => <option key={x.name} value={x.name} />)}
            </datalist>
        </>

    )
}

export default CitySelectionContainer
