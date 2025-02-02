import { FC } from "react";
import { INameVacancy } from "../type/TypeVacancyModalEntity";

const NameVacancy: FC<INameVacancy> = ({vacancy}) => {
    return (
        <div className="w-full flex items-center">
            <div
                className="border-emerald-400 mr-2.5 h-16 w-16 aspect-ratio border rounded-full bg-no-repeat mb-3"
                style={{ backgroundImage: vacancy.img ? `url(${vacancy.img})` : '', backgroundSize: 'contain', backgroundPosition: 'center' }}>

            </div>
            <div className="text-sm w-4/6 ">
                <div className="group">
                    <a className="max-h-18 text-base mb-1 font-semibold text-ellipsis line-clamp-3 h-18 px-1" href={`${vacancy.alternate_url}`} target="_blank" rel="noopener noreferrer">
                        <h2 className={"text-blue-600 text-base max-h-full text-base mb-1 font-semibold text-ellipsis line-clamp-3 h-18 "}>{vacancy.name}</h2>
                    </a>
                    <div className="absolute w-full bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-100 text-black border text-sm p-2 rounded">{vacancy.name}</div>
                </div>
                <div className="group">
                    <h3 className="text-xs max-h-5 text-base mb-1 font-semibold text-ellipsis line-clamp-1 h-5 px-1 text-emerald-500">{vacancy.employer}</h3>
                    <div className="absolute w-full bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-100 text-black border text-sm p-2 rounded">{vacancy.employer}</div>
                </div>
            </div>
        </div>
    )
}

export default NameVacancy