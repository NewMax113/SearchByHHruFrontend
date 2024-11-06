import { useEffect, useState } from "react"

const useFetch = (url: string, word: string, pages: number, perPageMax: number, area: number = 113, params: any) => {
    let [data, setData] = useState<any>()
    let [error, setError] = useState<any>('')

    useEffect(() => {
        let fetchData = async () => {
            try {
                await fetch(`${url}?text=${word}&page=${pages}&per_page=${perPageMax}${params}`)
                    .then(response => response.json())
                    .then((data) => {
                        console.log(data)
                        setData({
                            pages: {
                                pages: data.pages,
                                page: data.page,
                                found: data.found
                            },
                            items: data.items
                        })
                    })
                    .catch(err => console.log('Ошибочка:', err))
                
            }
            catch (err) {
                setError("Произошла ошибка при загрузке данных.");
                console.log("Ошибочка:", err);
            }
        }
        fetchData()
    }, [url, pages, word, area, params])
    console.log(data)
    return data
}

export default useFetch
