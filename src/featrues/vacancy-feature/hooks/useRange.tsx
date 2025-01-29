import { useEffect, useState } from "react";
import { IColor } from "../type/IVacancyFeature";
import { COLOR_CHANGE_STEP, COLOR_COUNTER_LIMITED, COLOR_MAX_RGB, COLOR_START, RELIABILITY_LIMIT } from "../utils/constant";
import { IResultVacancy } from "../../../pages/type/type";

const useRange = ({ saveResultVacancy }: { saveResultVacancy: IResultVacancy | null }) => {
    let [color, setColor] = useState<IColor>({ colorRGBOne: COLOR_START, colorRGBTwo: COLOR_MAX_RGB, sumNumberColor: 0 })
    let [count, setCount] = useState<number>(100)

    useEffect(() => {
        if (saveResultVacancy?.reliabilityPercentage) {
            if (count > saveResultVacancy?.reliabilityPercentage && count > RELIABILITY_LIMIT) {
                setTimeout(() => {
                    setCount((prevCount: number) => prevCount - 1);

                }, 10);
            }
            if (color.sumNumberColor < COLOR_COUNTER_LIMITED) {
                if (color.colorRGBOne < COLOR_MAX_RGB) {
                    if (color.colorRGBOne + COLOR_CHANGE_STEP > COLOR_MAX_RGB) {
                        setColor({ ...color, colorRGBOne: COLOR_MAX_RGB, sumNumberColor: color.sumNumberColor + COLOR_CHANGE_STEP })
                    } else {
                        setColor({ ...color, colorRGBOne: color.colorRGBOne + COLOR_CHANGE_STEP, sumNumberColor: color.sumNumberColor + 6 })
                    }
                } else {
                    if (color.colorRGBTwo - COLOR_CHANGE_STEP < 0) {
                        setColor({ ...color, colorRGBTwo: 0, sumNumberColor: color.sumNumberColor + COLOR_CHANGE_STEP })
                    } else {
                        setColor({ ...color, colorRGBTwo: color.colorRGBTwo - COLOR_CHANGE_STEP, sumNumberColor: color.sumNumberColor + COLOR_CHANGE_STEP })
                    }
                }
            }
        }
    }, [count, saveResultVacancy])

    return { color, count }
}

export default useRange