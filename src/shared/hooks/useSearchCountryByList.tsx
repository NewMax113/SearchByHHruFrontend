import { Dispatch, SetStateAction, useEffect } from "react";
import { IListCountry } from "../../pages/type/type";

export interface IUseSearchCountryByList {
    listCountries: IListCountry[] | []
    country: string
    setObjCountry: Dispatch<SetStateAction<IListCountry | null>>
}

const useSearchCountryByList = ({listCountries, country, setObjCountry}: IUseSearchCountryByList) => {

    useEffect(() => {
        if (listCountries) {
            for (let index = 0; index < listCountries.length; index++) {
                if (listCountries[index].name === country) {
                    setObjCountry({ ...listCountries[index] })
                    break;
                }
            }
        }
    }, [listCountries, country])
}

export default useSearchCountryByList