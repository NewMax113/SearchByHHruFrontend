import { Dispatch, SetStateAction } from "react";
import { IColor, IhtmlString } from "../../../featrues/vacancy-feature/type/IVacancyFeature";
import { IVacancy } from "../../../pages/type/TypeJobOpening";
import { IResultVacancy } from "../../../pages/type/type";


interface IBaseStatistics {
    saveResultVacancy: IResultVacancy | null;
    count: number;
    color: IColor;
}

interface ILoadingHandler {
    isLoading: boolean;
    onClickHandle: () => void;
}

interface IDescriptionHandler {
    desc: boolean;
    setDesc: Dispatch<SetStateAction<boolean>>;
}

export interface IVacancyContent extends IBaseStatistics, ILoadingHandler {
    vacancy: IVacancy;
    theObj: IhtmlString;
}

export interface IStatisticsVacancyBlock extends IBaseStatistics, ILoadingHandler {}

export interface IStatisticsVacancy extends IBaseStatistics {}

export interface IButtonsVacancy extends IDescriptionHandler {
    vacancy: IVacancy;
}

export interface IDescriptionVacancy extends IDescriptionHandler {
    theObj: IhtmlString;
    vacancy: IVacancy;
}
