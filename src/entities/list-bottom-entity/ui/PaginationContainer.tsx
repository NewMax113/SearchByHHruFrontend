import { FC, ReactNode } from "react"

const PaginationContainer: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <div className="text-blue-500 text-xl border-t-1-emerald">
            {children}
        </div>
    )
}

export default PaginationContainer