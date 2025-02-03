import { FC, ReactNode } from "react"

export const Header: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <header>
            <div className='xl:max-w-screen-xl items-center xl:flex md:flex sm:flex p-2 mb-2.5 max-w-screen-xl m-auto lg:max-w-grid-lg sm:max-w-grid-sm'>
                {children}
            </div>
        </header>
    )
}

export const Main: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <main className="flex flex-col items-center">
            {children}
        </main>
    )
}