import { FC } from "react";
import FilterModelEntity from "../../entities/filter-entity/model/FilterModelEntity";


const FilteringVacancies: FC<any> = ({loading}: {loading: boolean}) => {


    return (
        <FilterModelEntity loading={loading}/>
    )
}

export default FilteringVacancies

