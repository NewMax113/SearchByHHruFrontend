import { useDispatch } from "react-redux"
import { AppDispatch, IRootState } from "../../../app/model/reducer"
import { useSelector } from "react-redux"
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react"
import { setBodyRequest } from "../../../pages/list-vacancyes-page/model/parameters-reducer"
import { newPage } from "../../../pages/list-vacancyes-page/model/pages-reducer"
import { setTextRedux } from "../../../pages/list-vacancyes-page/model/job-opening-reducer"

const useActionOnTheText = ({ setLoading }: { setLoading: Dispatch<SetStateAction<boolean>>, }) => {
    const dispatch = useDispatch<AppDispatch>()
    let text = useSelector<IRootState, string>(state => state.jobOpeningReducer.text)

    let [textInput, setTextInput] = useState<string>('')

    const onChangeEvent = (e: ChangeEvent<HTMLInputElement>) => setTextInput(e.target.value)

    const handleClick = () => {
        dispatch(setBodyRequest())
        dispatch(newPage(0))
        if (textInput !== text) {
            dispatch(setTextRedux(textInput))
            setLoading(true)
        } else {
            setLoading(false)
        }
    }

    return { onChangeEvent, handleClick, textInput }
}

export default useActionOnTheText