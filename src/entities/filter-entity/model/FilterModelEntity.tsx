import { FC } from "react";
import { useSelector } from "react-redux";
import { IRootState } from "../../../widgets/parameters-job-openings/model/reducer";
import { Select } from "../../../shared/ui";


const FilterModelEntity: FC<any> = ({loading}: {loading: boolean}) => {
    let pages = useSelector<IRootState, any>(state => state.pages.found)

    return (
        <>
            <div className='flex justify-around pt-4 text-sm'>
                <div className='min-w-40'>
                    Вакансий: {!loading ? pages : 'Загрузка'}
                </div>
                <div className="text-sm whitespace-nowrap ">
                    <Select
                        id='vacancy'
                        name='vacancy'
                        required={true}
                        classSelect='border'
                        text={['Все', 'Читал', 'Не читал']}
                        valueOption={['', 'read', 'notRead']} />
                </div>
            </div>
        </>
    )
}

export default FilterModelEntity

