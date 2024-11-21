import { useEffect, useState } from "react"

const useFetch = (url: string, word: string, pages: number, perPageMax: number, area: number = 113, params: any) => {
    let [data, setData] = useState<any>(null)
    let [error, setError] = useState<any>(null)

    useEffect(() => {
        let fetchData = async () => {
            try {
                await fetch(`${url}?text=${word}&page=${pages}&per_page=${perPageMax}${params}`)
                    .then(response => {
                        if (!response.ok) {
                            const errorMessage = response.json();
                            throw new Error(`Ошибка ${response.status}: ${errorMessage}`);
                        } else {
                            return response.json()
                        }
                    })
                    .then((data) => {
                        console.log(data)
                        setData(data)
                    })

            }
            catch (error: any) {
                setError(error.message);
            }
        }
        fetchData()
    }, [url, pages, word, area, params])
    console.log(data)
    return {data, error}
}

export default useFetch
