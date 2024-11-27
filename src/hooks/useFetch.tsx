import { useEffect, useState } from "react"

const useFetch = (url: string, body: any, method: string, headers: any) => {
    let [data, setData] = useState<any>(null)
    let [error, setError] = useState<any>(null)
    let [loading, setLoading] = useState<any>(null)

    useEffect(() => {
        
        let fetchData = async () => {
            try {
                await fetch(`${url}${body}`, {
                    method: method,
                    headers:  {...headers} 
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
                            
                            return response.json()
                        }
                    })
                    .then((data) => {
                        if (data) {
                           setLoading(true) 
                        }
                        
                        setData(data)
                    })
            }
            catch (error: any) {
                setLoading(false)
                setError('Ошибка сети');
                //throw error
            }
        }
        fetchData()
    }, [url, body])

    return { data, error, loading }
}

export default useFetch