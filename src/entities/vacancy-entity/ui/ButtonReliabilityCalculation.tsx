import { FC, ReactNode } from "react"
import { Button } from "../../../shared/ui"

const ButtonReliabilityCalculation: FC<{ children: ReactNode, onClickHandle: () => void }> = ({ children, onClickHandle }) => {
    return (
        <div className="h-2/4 flex items-center mb-7">
            <Button classButton="absolute left-1/4 border p-1 rounded-lg border-blue-300 text-blue-500 hover:bg-blue-500 hover:text-white hover:shadow-lg" text={children} onClick={onClickHandle} />
        </div>
    )
}  

export default ButtonReliabilityCalculation