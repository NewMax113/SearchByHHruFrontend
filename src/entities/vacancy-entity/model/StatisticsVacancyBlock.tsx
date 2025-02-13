import { FC } from "react"
import { IStatisticsVacancyBlock } from "../type/TypeVacancyModalEntity"
import { ButtonReliabilityCalculation, StatisticsVacancy } from "../ui"
import { LoadingEasy } from "../../../shared/ui"


const StatisticsVacancyBlock: FC<IStatisticsVacancyBlock> = ({
    saveResultVacancy,
    count,
    color,
    isLoading,
    onClickHandle
}) => {

    if (!saveResultVacancy && !isLoading) {
        return (
            <ButtonReliabilityCalculation onClickHandle={onClickHandle}>Расчитать надежность</ButtonReliabilityCalculation>
        )
    }

    if (!saveResultVacancy && isLoading) {
        return (
            <LoadingEasy />
        )
    }

    return (
        <StatisticsVacancy color={color} count={count} saveResultVacancy={saveResultVacancy}/>
    )
}

export default StatisticsVacancyBlock