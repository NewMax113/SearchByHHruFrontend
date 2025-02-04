import { IResultVacancy } from "./type"


export interface IVacancy {
    accredited_id_employer?: boolean,
    alternate_url: string,
    city: string,
    description: string,
    employer: string,
    employer_id: string,
    experience: string,
    id: string,
    name: string,
    salary: { from: number | null, to: number | null, currency: string | null } | null,
    trusted: boolean
    schedule?: string
    img: string | null
}

export interface IJob_opening_Array {
    vacancy: IVacancy,
}

export interface IinitialStateJobOpening {
    text: string,
    job_opening_Array: IJob_opening_Array[] | []
}

export interface IFetchVacancyFeature {
    data: IResultVacancy | null,
    error: string | { err_status: number, err_description: string } | null,
    loading: boolean | null
}