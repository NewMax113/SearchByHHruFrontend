import { useState } from "react"

let useSwitch = (boolean: boolean) => {
    let [status, setStatus] = useState<any>(boolean)
    console.log(status, 'МОЙ СТАТУС')
    return [status, setStatus]
}

export default useSwitch