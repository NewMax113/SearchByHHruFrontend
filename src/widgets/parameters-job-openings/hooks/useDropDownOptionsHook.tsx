import { Dispatch, SetStateAction, useState } from "react"

const useDropDownOptionsHook = ({ setDarkeningTheBackground }: {setDarkeningTheBackground: Dispatch<SetStateAction<boolean>>}) => {
    let [dropDownOptions, setDropDownOptions] = useState<boolean>(false)

    const btnDropDown = () => {
        setDropDownOptions(!dropDownOptions)
        setDarkeningTheBackground(!dropDownOptions)
    }

    const modalClose = () => {
        document.addEventListener('mouseup', (e: Event) => {
            let container = document.getElementById('modal') as HTMLDivElement | null;

            if (container && !container.contains(e.target as Node)) {
                setDropDownOptions(false)
                setDarkeningTheBackground(false)
            }
        });
    }

    return {btnDropDown, modalClose, dropDownOptions}
}

export default useDropDownOptionsHook