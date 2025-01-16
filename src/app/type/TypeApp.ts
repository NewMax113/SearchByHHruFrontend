export interface IToken {
  name: string | null,
  value: string | null,
  time: number | null
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
    loading: boolean | null
}