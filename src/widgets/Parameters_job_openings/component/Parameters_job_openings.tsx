import React, {
    ChangeEvent,
    FC,
    useEffect,
} from 'react'
import style from '../style/style.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, IRootState } from '../../Parameters_job_openings/model/reducer'
import { getRegions } from '../../Parameters_job_openings/model/getRegions'
import { setRegions, setRegionsArray, setRegionSelected } from '../../Parameters_job_openings/model/params-reducer'
import { Select } from './Select'

export const Parameters_job_openings: FC = () => {
    const dispatch: any = useDispatch<AppDispatch>()
    const city = useSelector<IRootState, any>(state => state.params.citys)
    const regions = useSelector<IRootState, any>(state => state.params.regions)
 
    useEffect(() => {
      let setReg = async () => {
        dispatch(setRegions(await getRegions()))
        dispatch(setRegionsArray('Россия'))
      }
      setReg()

      
    }, [])

    return (
        <div className={style.parameters_for_search}>
            <div className={style.parameter}>
                Исключить слова:
                <input type='text' placeholder='Повар, рекрутер' />
            </div>
            <div className={style.parameter}>
                Ключевые слова:
                <input type='text' placeholder='Повар, рекрутер' />
            </div>
            <div className={style.parameter}>Регион:
                <Select 

                    regions={regions}
                />
            </div>
            <div className={style.parameter}>Город:
                <select>
                {city.map((x: any)=> <option value={x}>{x}</option>)}
                </select>

                {/* 
                объект для городов и объект для областей
                select по областям, поиск по городам
                */}
            </div>
            <div className={style.parameter}>Уровень дохода: <input type="text" placeholder='от' defaultValue='0' />-<input type="text" placeholder='до' defaultValue='1000000' /></div>
            <div className={style.parameter}>Требуемый опыт работы:
                <select>
                    <option value="Не имеет значения">Не имеет значения</option>
                </select>
            </div>
            <div className={style.parameter}>Тип занятости:
                <select>
                    <option value="Занят">Занят</option>
                </select>
            </div>
            <div className={style.parameter}>График работы:
                <select>
                    <option value="Полная">Полная</option>
                </select>
            </div>
            <div className={style.parameter}>------------------------</div>
            <div className={style.parameter}>Задолжности компании: ...</div>
            <div className={style.parameter}>Имеет компания сайт: да</div>
            <div className={style.parameter}>Оборот: 1млн</div>
            <div className={style.parameter}>Надежность: Средняя</div>
            <div className={style.parameter}>Оценка сотрудников: 4.3</div>
        </div>
    )
}
