import { FC, useEffect, useState } from 'react'
import { ChangeEvent } from 'react'
import { useSelector } from 'react-redux'
import { IRootState } from '../model/reducer'
import { useParameters } from '../../../hooks/useParametersContext'
import { Input } from '../../../ui'
import useSearchWord from '../../../hooks/useSearchWord'


const CitySelectionContainer: FC = () => {
    let listCities = useSelector<IRootState, any>(state => state.params.listCities)
    const { parameters, updateParameter } = useParameters();
    let [text, setText] = useState<string>(parameters.city.city)
    let sortCities = useSearchWord(listCities.cities, text)

    useEffect(() => {
        const resetText = () => {
            if (!parameters.city.city) {
                setText('')
            }
        }
        resetText()
    }, [listCities.country])

    const textInput = (e: ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }

    let checkingValidityCity = () => {
        if (text === sortCities[0]?.name) {
            updateParameter({ city: { id: sortCities[0].id, city: sortCities[0].name } })
        } else {
            alert('Вы ввели некорректные данные')
            setText('')
            if (sortCities.length === 1) {
                alert(`Могу предложить ${sortCities[0].name}`)
                setText(sortCities[0].name)
            }
        }
    }

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
                {(sortCities.length > 0 && sortCities)
                    ? sortCities.map((x: any) => <option value={x.name}>{x.name}</option>)
                    : listCities.cities.map((x: any) => <option value={x.name}>{x.name}</option>)}
            </datalist>
        </div>

    )
}

export default CitySelectionContainer
