import { ChangeEvent } from "react";

export interface ISearchModelEntity {
  textInput: string,
  onChangeEvent: (e: ChangeEvent<HTMLInputElement>) => void,
  handleClick: () => void
}