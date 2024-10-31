import { ChangeEvent } from "react"

export interface IInput {
    value: string
    typeInput: string
    id?: string
    list?: string
    name?: string
    classInput?: string
    placeholder?: string
    checkedInput?: boolean
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => any
    onClickInput?: () => any
    onChange?: (e: ChangeEvent<HTMLInputElement>) => any
}

export interface IButton {
    text: string
    classButton: string
    onClick?: () => any
}

export interface ISelect {
    text: string[]
    required: boolean
    classSelect: string
    valueOption: string[]
    id?: string
    name?: string
    valueSelect?: string
    onChange?: (e: any) => any
}

export interface IFetch {
    url: string,
    text: string,
    pages: number,
    area: number,
    params: any,
    requestBody: object
}