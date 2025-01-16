import { useEffect, useState } from "react";
import { IList, IUseSearchWord } from "../type/TypesParametersVacancy";


const useSearchWord = ({listCities, text}: IUseSearchWord) => {
    let [cities, setCities] = useState<IList[] | []>([])
    useEffect(() => {
        if (listCities.length > 0) {
            if (text) {
                setCities([])
                for (let i = 0; i < listCities.length; i++) {
                    if (listCities[i].name.toLowerCase().startsWith(text.toLowerCase())) {
                        setCities((cityArr: IList[]) => [...cityArr, { id: listCities[i].id, name: listCities[i].name }])
                    }
                }
            }
        }

    }, [text])
    return text ? cities : []
}

export default useSearchWord