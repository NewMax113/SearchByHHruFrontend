import { Dispatch, SetStateAction } from "react"
import { IListCountry } from "../../../pages/type/type"

export interface ICheckboxInput {
    typeInput: string
    value: string
    id: string
    name: string
    classLabel: string
    classButton: string
}

export interface IList {
    id: number,
    name: string
}

export interface ICity {
    id: number | null,
    city: string | null
}

export interface ICountry {
    id: number,
    country: string
}

export interface IUseGetListCountries {
    setListCountries: Dispatch<SetStateAction<IListCountry[]>>
}

export interface IRadioInput {
    typeInput: string
    text?: string
    value: string
    name: string
    id: string
    classLabel: string
    classInput: string
}

export interface IDataGetListCountries {
    data: IListCountry[] | null,
    error: string | { err_status: number, err_description: string } | null,
    isLoading: boolean 
}

export interface IUseOutputCitiesList {
    listCountries: IListCountry[] | [],
    country: string
}

export interface IUseSearchWord {
    listCities: IList[],
    text: string
}

export interface IUseResetCity {
    listCities: IList[]
    city: ICity
    setText: Dispatch<SetStateAction<string>>
}