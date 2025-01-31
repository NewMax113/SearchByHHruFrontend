import { Dispatch, SetStateAction } from "react";

export interface IListJobOpenings {
    loading: boolean,
    setLoading: Dispatch<SetStateAction<boolean>>,
    beingVacansies: boolean
}