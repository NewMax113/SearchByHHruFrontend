export interface IListCountry {
    id: number,
    parent_id: number | null,
    name: string,
    areas: IListCountry[] | []
}

export interface IResultVacancy {
    reliabilityPercentage: number | null,
    revenueObj: null | IRevenue
}

export interface IRevenue {
    year: string | null,
    value: string | null,
    scale: string | null,
    growth: string | null,
}