import { FC, ReactNode } from "react"

export const IconParameters: FC<{ btnDropDown: () => void }> = ({ btnDropDown }) => {
    return (
        <div
            style={{ borderRadius: '20px 0px 0px 0px' }}
            className='fixed top-32 origin-center rotate-90 -left-8 p-2 pb-5 border bg-white border-blue-500 text-blue-500 hover:-left-7 hover:pb-5'
            onClick={btnDropDown}>
            Параметры
        </div>
    )
}

export const ParametersBlock:
    FC<{ modalClose: () => void, children: ReactNode, id: string }>
    = ({ modalClose, children, id }) => {

        return (
            <div id={id} onClick={modalClose}>
                {children}
            </div >
        )
    }

export const ParametersForm: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className="bg-white border rounded-lg px-8 py-6 mx-auto max-w-2xl fixed top-0" >
            <div className="text-2xl font-medium mb-4">Параметры</div>
            <form>
                {children}
            </form>
        </div>
    )
}

export const RadioBlock: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className="mb-4">
            <div className="block text-gray-700 font-medium mb-2">Требуемый опыт работы:</div>
            <div className="flex flex-wrap justify-between">
                {children}
            </div>
        </div>
    )
}

export const CheckboxBlock: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div>
            <label className="block text-gray-700 font-medium mb-2">График работы:</label>
            <div className="flex flex-wrap justify-between">
                {children}
            </div>
        </div>
    )
}
