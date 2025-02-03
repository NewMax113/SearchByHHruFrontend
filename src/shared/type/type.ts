import { ChangeEvent, FocusEvent, ReactNode } from "react"

export interface IInput {
    value: string
    typeInput: string
    id?: string
    list?: string
    name?: string
    classInput?: string
    placeholder?: string
    checkedInput?: boolean
    onBlur?: (e: FocusEvent<HTMLInputElement>) => void
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}

export interface IButton {
    text: string | ReactNode
    classButton: string
    onClick?: () => void
}

export interface ISelect {
    required: boolean
    classSelect: string
    valueOption: string[]
    text?: string[]
    id?: string
    name?: string
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

export interface IArgument {
    name: string | null,
    city: string,
    remoteWork: boolean,
    employer_id: string,
    token: string | null
}

