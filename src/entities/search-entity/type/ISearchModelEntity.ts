import { ChangeEvent } from "react";

export interface ISearch {
  textInput: string,
  onChangeEvent: (e: ChangeEvent<HTMLInputElement>) => void,
  handleClick: () => void
}