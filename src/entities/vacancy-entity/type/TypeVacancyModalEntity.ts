import { Dispatch, SetStateAction } from "react";
import { IColor, IhtmlString } from "../../../featrues/vacancy-feature/type/IVacancyFeature";
import { IVacancy } from "../../../pages/type/TypeJobOpening";
import { IResultVacancy } from "../../../pages/type/type";

export interface IVacancyModelEntity {
    window: boolean,
    vacancy: IVacancy,
    theObj: IhtmlString,
    switchFetch: () => void,
    setWindow: Dispatch<SetStateAction<boolean>>,
    saveResultVacancy: IResultVacancy | null,
    count: number,
    color: IColor
}

export interface IContentVacancy {
    vacancy: IVacancy,
    theObj: IhtmlString,
}

export interface IModalVacancy {
    window: boolean,
    switchFetch: () => void,
    setWindow: Dispatch<SetStateAction<boolean>>,
    saveResultVacancy: IResultVacancy | null,
    count: number,
    color: IColor
}