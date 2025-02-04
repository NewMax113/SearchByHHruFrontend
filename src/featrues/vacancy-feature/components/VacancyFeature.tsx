import { FC } from 'react'
import { VacancyContent } from '../../../entities';
import { IJob_opening_Array } from '../../../pages/list-vacancyes-page/type/TypeJobOpening';
import { IhtmlString } from '../type/IVacancyFeature';
import GetCookie from '../../../shared/utils/GetCookie';
import useRange from '../hooks/useRange';
import useVacancyStorage from '../hooks/useVacancyStorage';
import useSaveArg from '../hooks/useSaveArg';


const VacancyFeature: FC<IJob_opening_Array> = ({ vacancy }) => {
    const htmlString: string = vacancy.description;
    const theObj: IhtmlString = { __html: htmlString };
    const token = GetCookie('token')
    const { onClickHandle, arg } = useSaveArg({ vacancy, token });
    const { saveResultVacancy, isLoading } = useVacancyStorage({ vacancy, arg });
    const { color, count } = useRange({ saveResultVacancy });

    return (
        <VacancyContent
            vacancy={vacancy}
            theObj={theObj}
            saveResultVacancy={saveResultVacancy}
            count={count}
            color={color}
            isLoading={isLoading}
            onClickHandle={onClickHandle}
        />
    )
}

export default VacancyFeature
