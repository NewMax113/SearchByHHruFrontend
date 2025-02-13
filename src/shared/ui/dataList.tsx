import { FC } from "react"

interface IDataList {
    text: string
    id: string
    className: string
    arrValues1: any[]
    arrValues2: any[]
}

const DataList: FC<IDataList> = ({ text, id, className, arrValues1, arrValues2 }) => {
    return (
        <datalist
            key={text}
            id={id}
            className={className}
        >
            {((arrValues1.length > 0 && arrValues1)
                ? arrValues1
                : arrValues2)
                .map((value) => <option key={value.name} value={value.name} />)}
        </datalist>
    )
}

export default DataList