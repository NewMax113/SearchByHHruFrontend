import { FC } from "react";
import { useSelector } from "react-redux";
import { Select } from "../../../shared/ui";
import { IRootState } from "../../../app/model/reducer";
import { IFilterModelEntity } from "../type/TypeFilterModelEntity";


const FilterModelEntity: FC<IFilterModelEntity> = ({ loading }) => {
    let pages = useSelector<IRootState, number>(state => state.pages.found)

    return (
        <>
            <div className='flex justify-around pt-4 text-sm'>
                <div className='min-w-40'>
                    Вакансий: {!loading
                        ? (pages > 1998
                            ? '>1998'
                            : pages)
                        : 'Загрузка'}
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