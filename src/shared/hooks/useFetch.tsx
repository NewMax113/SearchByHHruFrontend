import { useEffect, useState } from "react"

const useFetch = (url: string, linkBody: any, method: string, headers: any, bodyPost: any) => {
    let [data, setData] = useState<any>(null)
    let [error, setError] = useState<any>(null)
    let [loading, setLoading] = useState<any>(null)

    useEffect(() => {
        let fetchData = async () => {
            console.log(JSON.stringify({...bodyPost}), 'пост')
            try {
                await fetch(`${url}?${linkBody}`, {
                    method: method,
                    headers:  {...headers},
                    body: bodyPost ? JSON.stringify(bodyPost) : null
                })
                    .then(response => {
                        if (!response.ok) {
                            setLoading(false)
                            const errorMessage = response.json();
                            errorMessage.then(e => {
                                setError({ err_status: response.status, err_description: e.error });
                            })
                        } else {
                            return response.json()
                        }
                    })
                    .then((data) => {
                        if (data) {
                           setLoading(true) 
                           setData(data)
                           setError(null)
                        }
                    })
            }
            catch (error: any) {
                setLoading(false)
                setError('Ошибка сети');
                //throw error
            }
        }
        fetchData()
    }, [url, linkBody, bodyPost])

    return { data, error, loading }
}

export default useFetch