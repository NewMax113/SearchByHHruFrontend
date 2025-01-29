import { Dispatch, SetStateAction } from "react"

export interface IToken {
  name: string
  value: string
  time: number
}

export interface DataToken {
  access_token: string,
  expires_in: number,
  refresh_token: string,
  token_type: string
}

export interface IDataApp {
  data: DataToken | null,
  error: string | { err_status: number, err_description: string } | null
  isLoading: boolean
}

export interface IApp {
  cookieToken: string
  darkeningTheBackground: boolean
  setDarkeningTheBackground: Dispatch<SetStateAction<boolean>>
  error: string | {
    err_status: number;
    err_description: string;
  } | null
}