import { FC, useState } from "react"
import { IVacancyContent } from "../type/TypeVacancyModalEntity"
import { ButtonsVacancy, DescriptionVacancy, NameVacancy, VacancyDetailsPanel  } from "../ui"
import StatisticsVacancyBlock from "./StatisticsVacancyBlock"
import { ArcticalBlock, VacancyInfoBlock, HeaderVacancyInfo } from "../ui/VacancyBlocksUi"



const VacancyContent: FC<IVacancyContent> = (props) => {
    const [desc, setDesc] = useState<boolean>(false)
    if (desc) {
        return (
            <DescriptionVacancy desc={desc} setDesc={setDesc} theObj={props.theObj} vacancy={props.vacancy} />
        )
    }

    return (
        <ArcticalBlock>
            <VacancyInfoBlock >
                <HeaderVacancyInfo>
                    <NameVacancy vacancy={props.vacancy} />
                    <VacancyDetailsPanel  vacancy={props.vacancy} />
                </HeaderVacancyInfo>
                <StatisticsVacancyBlock
                    saveResultVacancy={props.saveResultVacancy}
                    count={props.count}
                    color={props.color}
                    isLoading={props.isLoading}
                    onClickHandle={props.onClickHandle}
                />
            </VacancyInfoBlock >
            <ButtonsVacancy desc={desc} setDesc={setDesc} vacancy={props.vacancy} />
        </ArcticalBlock>
    )
}

export default VacancyContent