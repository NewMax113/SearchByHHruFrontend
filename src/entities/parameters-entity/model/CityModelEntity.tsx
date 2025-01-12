import { FC } from "react"
import { Input } from "../../../shared/ui"
import { ICityModalEntity } from "../type/ICityModelEntity"


const CityModalEntity: FC<ICityModalEntity> = ({id, text, textInput, checkingValidityCity, sortCities, listCities}) => {

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
                    .map((city: {name: string}) => <option key={city.name} value={city.name} />)}
            </datalist>
        </>
    )
}

export default CityModalEntity