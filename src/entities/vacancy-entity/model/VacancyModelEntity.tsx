import { FC, ReactNode, useState } from "react"
import { IVacancyModelEntity } from "../type/TypeVacancyModalEntity"
import { ButtonsVacancy, DescriptionVacancy, NameVacancy, ParametersVacancy } from "../ui"
import StatisticslVacancy from "../ui/StatisticslVacancy"
import { ArcticalBlock, ContentBlock, HeaderContentBlock } from "../ui/VacancyBlocksUi"



const VacancyModelEntity: FC<IVacancyModelEntity> = (props) => {
    const [desc, setDesc] = useState<boolean>(false)
    if (desc) {
        return (
            <DescriptionVacancy desc={desc} setDesc={setDesc} theObj={props.theObj} vacancy={props.vacancy} />
        )
    }

    return (
        <ArcticalBlock>
            <ContentBlock>
                <HeaderContentBlock>
                    <NameVacancy vacancy={props.vacancy} />
                    <ParametersVacancy vacancy={props.vacancy} />
                </HeaderContentBlock>
                <StatisticslVacancy
                    saveResultVacancy={props.saveResultVacancy}
                    count={props.count}
                    color={props.color}
                    isLoading={props.isLoading}
                    onClickHandle={props.onClickHandle}
                />
            </ContentBlock>
            <ButtonsVacancy desc={desc} setDesc={setDesc} vacancy={props.vacancy} />
        </ArcticalBlock>
    )
}

export default VacancyModelEntity