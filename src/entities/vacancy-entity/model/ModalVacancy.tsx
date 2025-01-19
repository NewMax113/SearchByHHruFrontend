import { FC } from "react"
import { IModalVacancy } from "../type/TypeVacancyModalEntity"


const ModalVacancy: FC<IModalVacancy> = ({
    saveResultVacancy,
    count,
    color,
    isLoading,
    onClickHandle
}) => {

    if (!saveResultVacancy && !isLoading) {
        return (<button onClick={onClickHandle}>Клик</button>)
    }

    if (!saveResultVacancy && isLoading) {
        return (<div>...Загрузка</div>)
    }

    return (
        <div className='pl-1 w-full '>
            <h3 className='text-center'>Надежность компании</h3>
            <div>Надежность: {count}</div>
            <div className='rounded-full w-full relative m-4 border h-5 mx-auto'>
                <div
                    className={`rounded-full absolute bg-slate-500 h-full`}
                    style={{ width: `${count}%`, backgroundColor: `rgb(${color.colorRGBOne}, ${color.colorRGBTwo}, 0)` }}></div>
            </div>
            <div>
                <div>{saveResultVacancy?.revenueObj?.year
                    ? `Прибыль за ${saveResultVacancy.revenueObj.year} составила ${saveResultVacancy.revenueObj.value}${saveResultVacancy.revenueObj.scale} (${saveResultVacancy.revenueObj.growth})`
                    : 'Не нашлось информации о прибыли'}
                </div>
            </div>
        </div>
    )
}

export default ModalVacancy