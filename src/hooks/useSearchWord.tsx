import { useEffect, useState } from "react";

const useSearchWord = (arr: any, syllable: any) => {
    let [cities, setCities] = useState<any>([])
    console.log(syllable)
    useEffect(() => {
        if (syllable) {
            setCities([])
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].name.toLowerCase().startsWith(syllable.toLowerCase())) {
                    setCities((cityArr: any) => [...cityArr, { id: arr[i].id, name: arr[i].name }])
                }
            }

        }
    }, [syllable, arr])
    return syllable ? cities : []
}

export default useSearchWord