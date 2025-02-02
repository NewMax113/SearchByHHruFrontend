import { FC, ReactNode } from "react"

export const ArcticalBlock: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <article className={"sm:mb-0 xs:mb-4 bg-white rounded flex relative max-w-80 max-h-72 shadow-lg min-h-100 hover:outline hover:outline-1 hover:outline-emerald-400 py-2 relative px-4 w-full"}>
            {children}
        </article>
    )
}

export const ContentBlock: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className="flex flex-col justify-between">
            {children}
        </div>
    )
}

export const HeaderContentBlock: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className='h-52 overflow-auto flex flex-col justify-between'>
            {children}
        </div>
    )
}