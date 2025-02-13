import { FC } from "react";

const LoadingCard: FC = () => {
    return (
        <div style={{ minWidth: '19rem' }} className="sm:mb-0 xs:mb-4 animate-pulse rounded max-h-72 min-h-100 bg-gray-100 w-full">
            <div className="flex">
                <div className="h-16 w-16 bg-gray-300 mt-10 ml-4 rounded-full mr-5"></div>
                <div className="mt-8 w-44 bg-gray-300 h-20"></div>
            </div>
        </div>
    )
}

export default LoadingCard