import { useEffect, useState } from "react"

const useFetch = (url: string, linkBody: any, method: string, headers: any, bodyPost: any) => {
    let [data, setData] = useState<any>(null)
    let [error, setError] = useState<any>(null)
    let [loading, setLoading] = useState<any>(null)
    //console.log(url, linkBody, method)
    useEffect(() => {
        console.log('Вызов фетч')
        let fetchData = async () => {
            console.log(JSON.stringify({...bodyPost}), 'пост')
            try {
                await fetch(`${url}${linkBody}`, {
                    method: method,
                    headers:  {...headers},
                    body: bodyPost ? JSON.stringify(bodyPost) : null
                })
                    .then(response => {
                        if (!response.ok) {
                            setLoading(false)
                            const errorMessage = response.json();
                            console.log('кетч2')
                            errorMessage.then(e => {
                                setError({ err_status: response.status, err_description: e.error });
                            })
                        } else {
                            console.log('что это2')
                            return response.json()
                        }
                    })
                    .then((data) => {
                        if (data) {
                           setLoading(true) 
                           setData(data)
                        }
                        console.log(data)
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