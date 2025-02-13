import { FC } from "react";
import { IPaginationButton } from "../type/TypeListPage";


const PaginationButton: FC<IPaginationButton> = ({ className, callback, value}) => {

    return (
        <span className={className} onClick={callback} key={value}>{value}</span>
    )
}

export default PaginationButton