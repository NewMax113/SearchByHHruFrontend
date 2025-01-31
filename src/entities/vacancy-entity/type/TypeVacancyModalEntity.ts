import { Dispatch, SetStateAction } from "react";
import { IColor, IhtmlString } from "../../../featrues/vacancy-feature/type/IVacancyFeature";
import { IVacancy } from "../../../pages/type/TypeJobOpening";
import { IResultVacancy } from "../../../pages/type/type";

export interface IVacancyModelEntity {
    vacancy: IVacancy,
    theObj: IhtmlString,
    saveResultVacancy: IResultVacancy | null,
    count: number,
    color: IColor,
    isLoading: boolean,
    onClickHandle: ()=>void,
}

export interface IStatisticslVacancy {
    saveResultVacancy: IResultVacancy | null,
    count: number,
    color: IColor,
    isLoading: boolean,
    onClickHandle: ()=>void
}

export interface IDescriptionVacancy {
    theObj: IhtmlString
    vacancy: IVacancy
    setDesc: Dispatch<SetStateAction<boolean>>
    desc: boolean
}

export interface IButtonsVacancy {
    vacancy: IVacancy
    setDesc: Dispatch<SetStateAction<boolean>>
    desc: boolean
}

export interface INameVacancy {
    vacancy: IVacancy
}

export interface IParametersVacancy {
    vacancy: IVacancy
}