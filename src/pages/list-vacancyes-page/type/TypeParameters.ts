export interface IinitialStateParameters {
    requestBody: IRequestBody,
    country: { id: number, country: string },
    city: { id: null | number, city: null | string },
    salary: string,
    experience: string,
    schedule: string[],
    listCities: { id: number, name: string }[],
}

export interface IRequestBody {
    area: string | number,
    salary?: string,
    experience?: string,
    schedule?: string[],
    only_with_salary: boolean
}