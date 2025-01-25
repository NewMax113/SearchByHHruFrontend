import { FC } from "react";
import { IDescriptionVacancy } from "../type/TypeVacancyModalEntity";


const DescriptionVacancy: FC<IDescriptionVacancy> = ({ theObj, vacancy, setDesc, desc }) => {
    return (
        <article className={"px-4 rounded flex flex-col relative max-w-80 max-h-72 shadow-lg min-h-100 hover:outline hover:outline-1 hover:outline-gray-400 "}>
            <div className="overflow-auto mb-11">
                <p
                    dangerouslySetInnerHTML={theObj}
                    className={"mb-2 text-sm"}
                ></p>
            </div>
            <div className='absolute bottom-px flex justify-between mb-1' style={{ width: '90%' }}>
                <a href={vacancy.alternate_url} target="_blank" rel="noopener noreferrer" className={"shadow-lg text-sm cursor-pointer p-1 hover:bg-blue-500 hover:text-white rounded-md border "}>Открыть</a>
                <button onClick={() => setDesc(!desc)} className={"shadow-lg text-sm p-1 hover:bg-blue-500 hover:text-white rounded-md border "}>Описание</button>
            </div>
        </article>
    )
}

export default DescriptionVacancy