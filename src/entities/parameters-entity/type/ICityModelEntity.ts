import { ChangeEvent } from "react";

export interface ICityModalEntity {
    id: string,
    text: string,
    textInput: (e: ChangeEvent<HTMLInputElement>) => void,
    checkingValidityCity: ()=>void,
    sortCities: {id: number, name: string}[],
    listCities: {id: number, name: string}[]
}