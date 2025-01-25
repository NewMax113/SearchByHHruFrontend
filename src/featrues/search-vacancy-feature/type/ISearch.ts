import { SetStateAction, Dispatch } from "react";
import { IJob_opening_Array } from "../../../pages/type/TypeJobOpening";
import { IActionSetPage } from "../../../pages/type/TypePage";

export interface ISearchContainer {
  setLoading: Dispatch<SetStateAction<boolean>>,
  setBeingVacansies: Dispatch<SetStateAction<boolean>>
}

export interface IDataSearch {
  items: IJob_opening_Array[],
  pages: IActionSetPage
}

export interface IDataSearchFetch {
  data?: IDataSearch | null,
  error?: { status: number, data: { error: string } }
  isLoading?: boolean
}

export interface IUseRedirectRequestResponse {
  data?: IDataSearch
  setLoading: Dispatch<SetStateAction<boolean>>
}

export interface IUseCreatingQueryParameters {
  text: string,
  setResetPages: Dispatch<SetStateAction<boolean>>
}

export interface IUseResetPage {
  pages?: IActionSetPage
  resetPages: boolean
  setResetPages: Dispatch<SetStateAction<boolean>>
}