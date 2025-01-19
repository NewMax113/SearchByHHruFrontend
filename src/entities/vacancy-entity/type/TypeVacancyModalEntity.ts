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
    onClickHandle: ()=>void
}

export interface IContentVacancy {
    vacancy: IVacancy,
    theObj: IhtmlString,
}

export interface IModalVacancy {
    saveResultVacancy: IResultVacancy | null,
    count: number,
    color: IColor,
    isLoading: boolean,
    onClickHandle: ()=>void
}