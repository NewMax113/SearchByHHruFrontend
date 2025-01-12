import { Dispatch, SetStateAction } from "react";

export interface IListVacancy {
    setLoading: Dispatch<SetStateAction<boolean>>,
    beingVacansies: boolean
}