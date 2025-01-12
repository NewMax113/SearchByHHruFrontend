import { FC } from "react"
import { IContentVacancy } from "../type/TypeVacancyModalEntity"


const ContentVacancy: FC<IContentVacancy> = ({ vacancy, theObj }) => {
    return (
        <div className={"py-4 px-8 relative min-h-96"}>
            <div className='max-h-80 overflow-hidden'>
                <div>{vacancy.employer}</div>
                <a href={"#"}>
                    <h4 className={"text-base mb-3 font-semibold"}><u>{vacancy.name}</u></h4>
                </a>
                <div className='flex'>
                    <div className='text-xs mr-4'>{vacancy.city}</div>
                    <div className='text-xs'>{vacancy.schedule}</div>
                </div>

                <div className='text-sm'>
                    {vacancy.salary !== null
                        ? (vacancy.salary.from !== null && vacancy.salary.to !== null
                            ? <div>От {vacancy.salary.from} до {vacancy.salary.to} {vacancy.salary.currency}</div>
                            : (vacancy.salary.from !== null
                                ? <div>От {vacancy.salary.from} {vacancy.salary.currency}</div>
                                : <div>До {vacancy.salary.to} {vacancy.salary.currency}</div>))
                        : <div>З/п не указана</div>}</div>
                <p dangerouslySetInnerHTML={theObj} className={"mb-2 text-sm text-gray-600 after:content[''] after:absolute after:w-full after:bottom-0 after:left-0 after:h-20 after:pointer-events-none after:bg-gradient-to-b after:from-transparent after:to-white"}>

                </p>
            </div>

            <div className='absolute bottom-px w-4/5'>
                <hr className={"mt-4 "}></hr>
                <button className={"text-xs"}>Открыть</button>
                &nbsp;
            </div>
        </div>
    )
}

export default ContentVacancy