import { SetStateAction, Dispatch } from "react";

export interface ISearchJobOpenings {
  setLoading: Dispatch<SetStateAction<boolean>>,
  setBeingVacansies: Dispatch<SetStateAction<boolean>>
}