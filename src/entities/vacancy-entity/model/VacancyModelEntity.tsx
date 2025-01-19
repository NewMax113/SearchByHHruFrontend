import { FC, useState } from "react"
import { IVacancyModelEntity } from "../type/TypeVacancyModalEntity"
import ContentVacancy from "./ContentVacancy"
import ModalVacancy from "./ModalVacancy"


const VacancyModelEntity: FC<IVacancyModelEntity> = ({
    vacancy,
    theObj,
    saveResultVacancy,
    count,
    color,
    isLoading,
    onClickHandle
}) => {
    const [desc, setDesc] = useState<boolean>(false)
    if (desc) {
        return (
            <article className={"flex relative max-w-80 max-h-72 shadow-lg min-h-100 hover:outline hover:outline-1 hover:outline-gray-400 "}>
                <div className="overflow-auto ml-4 mb-7">
                    <p
                        dangerouslySetInnerHTML={theObj}
                        className={"mb-2 text-sm"}
                    ></p>
                </div>
                <div className='absolute bottom-px w-4/5 mx-4'>
                    <hr className={"mt-4 "}></hr>
                    <a href={vacancy.alternate_url} target="_blank" rel="noopener noreferrer" className={"text-xs cursor-pointer"}>Открыть</a>
                    <button onClick={() => setDesc(!desc)} className={"text-xs cursor-pointer"}>Описание</button>
                    &nbsp;
                </div>
            </article>
        )
    }

    return (
        <article className={"flex relative max-w-80 max-h-72 shadow-lg min-h-100 hover:outline hover:outline-1 hover:outline-gray-400 "}>
            <div className={"py-2 px-4 relative min-h-96 w-full"}>
                <div className='max-h-48 overflow-auto'>
                    <a href={`${vacancy.alternate_url}`} target="_blank" rel="noopener noreferrer">
                        <h4 className={"w-full text-center text-base mb-3 font-semibold text-ellipsis line-clamp-2 h-12"}><u>{vacancy.name}</u></h4>
                    </a>
                    <div className="relative group w-full flex items-center">
                        <div
                            className="mr-2.5 h-16 w-16 aspect-ratio border rounded-full bg-no-repeat mb-3"
                            style={{ backgroundImage: vacancy.img ? `url(${vacancy.img})` : '', backgroundSize: 'contain', backgroundPosition: 'center' }}>

                        </div>

                        <div className="w-4/6 max-h-12 text-base mb-1 font-semibold text-ellipsis line-clamp-2 h-16 ">{vacancy.employer}</div>
                        <div className="absolute w-full bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-gray-800 text-white text-sm p-2 rounded">{vacancy.employer}</div>



                    </div>
                    <div className='flex'>
                        <div className='text-xs mr-4'>{vacancy.city}</div>
                        <div className='text-xs mr-4'>{vacancy.schedule}</div>
                        <div className='text-xs'>{vacancy.experience}</div>
                    </div>

                    <div className='text-sm'>
                        {vacancy.salary !== null
                            ? (vacancy.salary.from !== null && vacancy.salary.to !== null
                                ? <div>От {vacancy.salary.from} до {vacancy.salary.to} {vacancy.salary.currency}</div>
                                : (vacancy.salary.from !== null
                                    ? <div>От {vacancy.salary.from} {vacancy.salary.currency}</div>
                                    : <div>До {vacancy.salary.to} {vacancy.salary.currency}</div>))
                            : <div>З/п не указана</div>}</div>
                </div>
                <ModalVacancy
                    saveResultVacancy={saveResultVacancy}
                    count={count}
                    color={color}
                    isLoading={isLoading}
                    onClickHandle={onClickHandle}
                />
                <div className='absolute bottom-px w-4/5'>
                    <hr className={"mt-4 "}></hr>
                    <a href={vacancy.alternate_url} target="_blank" rel="noopener noreferrer" className={"text-xs cursor-pointer"}>Открыть</a>
                    <button onClick={() => setDesc(!desc)} className={"text-xs cursor-pointer"}>Описание</button>
                    &nbsp;
                </div>
            </div>
        </article>
    )
}

export default VacancyModelEntity