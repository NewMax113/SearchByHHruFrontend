import { useState, useEffect } from "react";
import { IVacancy } from "../../../pages/list-vacancyes-page/type/TypeJobOpening";
import { useFetchSearchResultsQuery } from "../../search-vacancy-feature/hooks/useFetchSearchResultsQuery";
import { IArgument } from "../../../shared/type/type";


const useVacancyStorage = ({vacancy, arg}: {vacancy: IVacancy, arg: IArgument | null}) => {
  const [saveResultVacancy, setSaveResultVacancy] = useState(null);
  const { data, isLoading } = useFetchSearchResultsQuery({
    url: "/feedback",
    method: "POST",
    headers: {
        "User-Agent": "JobSearch (maxim0ruseev@gmail.com)",
        "Content-Type": "application/json",
    },
    queryParams: arg,
});

  useEffect(() => {
    const employerData = localStorage.getItem(vacancy.employer_id);
    if (employerData) {
      setSaveResultVacancy(JSON.parse(employerData));
    }
  }, [vacancy]);

  useEffect(() => {
    if (data) {
        setSaveResultVacancy(data)
        localStorage.setItem(vacancy.employer_id, JSON.stringify({ ...data }));
    }
}, [data])

  return { saveResultVacancy, isLoading };
};

export default useVacancyStorage