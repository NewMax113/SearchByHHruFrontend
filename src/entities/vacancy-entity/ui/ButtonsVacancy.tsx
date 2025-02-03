import { FC } from "react";
import { IButtonsVacancy } from "../type/TypeVacancyModalEntity";
import { Button } from "../../../shared/ui";

const ButtonsVacancy: FC<IButtonsVacancy> = ({ vacancy, setDesc, desc }) => {
    return (
        <div className='absolute bottom-px flex justify-between mb-1' style={{ width: '90%' }}>
            <a href={vacancy.alternate_url} target="_blank" rel="noopener noreferrer" className={"shadow-lg text-sm cursor-pointer p-1 hover:bg-blue-500 hover:text-white rounded-md border-blue-300 text-blue-500 border"}>Открыть</a>
            <Button text='Описание' onClick={() => setDesc(!desc)} classButton={"shadow-lg text-sm p-1 hover:bg-blue-500 hover:text-white rounded-md border-blue-300 text-blue-500 border"} />
        </div>
    )
}

export default ButtonsVacancy