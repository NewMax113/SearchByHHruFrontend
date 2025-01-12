import { FC } from "react";
import { FilterModelEntity } from "../../entities";
import { IFilteringVacancies } from "./type/IFilteringVacancies";


const FilteringVacancies: FC<IFilteringVacancies> = ({ loading }) => {

    return (
        <FilterModelEntity loading={loading} />
    )
}

export default FilteringVacancies

