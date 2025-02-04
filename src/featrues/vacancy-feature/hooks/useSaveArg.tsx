import { useState } from "react";
import { IVacancy } from "../../../pages/list-vacancyes-page/type/TypeJobOpening";
import { IArgument } from "../../../shared/type/type";

const useSaveArg = ({vacancy, token}: {vacancy: IVacancy, token: string | null}) => {
  const [arg, setArg] = useState<IArgument | null>(null);

  const onClickHandle = () => {
    setArg({
      name: vacancy.employer,
      city: vacancy.city,
      remoteWork: vacancy.schedule === "Удаленная работа",
      employer_id: vacancy.employer_id,
      token,
    });
  };

  return { arg, onClickHandle };
};

export default useSaveArg
