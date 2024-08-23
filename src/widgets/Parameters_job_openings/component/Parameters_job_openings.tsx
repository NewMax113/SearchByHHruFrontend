import React, {
    ChangeEvent,
    FC,
    useEffect,
    useState
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
    let [dropDownOptions, setDropDownOptions] = useState<boolean>(false)

    const btnDropDown = () => {
        setDropDownOptions(!dropDownOptions)
    }
    console.log(dropDownOptions)

    useEffect(() => {
        let setReg = async () => {
            dispatch(setRegions(await getRegions()))
            dispatch(setRegionsArray('Россия'))
        }
        setReg()


    }, [])



    return (
        // <div className={style.parameters_for_search}>
        //     <div className={style.parameter}>
        //         Исключить слова:
        //         <input type='text' placeholder='Повар, рекрутер' />
        //     </div>
        //     <div className={style.parameter}>
        //         Ключевые слова:
        //         <input type='text' placeholder='Повар, рекрутер' />
        //     </div>
        //     <div className={style.parameter}>Регион:
        //         <Select 

        //             regions={regions}
        //         />
        //     </div>
        //     <div className={style.parameter}>Город:
        //         <select>
        //         {city.map((x: any)=> <option value={x}>{x}</option>)}
        //         </select>

        //         {/* 
        //         объект для городов и объект для областей
        //         select по областям, поиск по городам
        //         */}
        //     </div>
        //     <div className={style.parameter}>Уровень дохода: <input type="text" placeholder='от' defaultValue='0' />-<input type="text" placeholder='до' defaultValue='1000000' /></div>
        //     <div className={style.parameter}>Требуемый опыт работы:
        //         <select>
        //             <option value="Не имеет значения">Не имеет значения</option>
        //         </select>
        //     </div>
        //     <div className={style.parameter}>Тип занятости:
        //         <select>
        //             <option value="Занят">Занят</option>
        //         </select>
        //     </div>
        //     <div className={style.parameter}>График работы:
        //         <select>
        //             <option value="Полная">Полная</option>
        //         </select>
        //     </div>
        //     <div className={style.parameter}>------------------------</div>
        //     <div className={style.parameter}>Задолжности компании: ...</div>
        //     <div className={style.parameter}>Имеет компания сайт: да</div>
        //     <div className={style.parameter}>Оборот: 1млн</div>
        //     <div className={style.parameter}>Надежность: Средняя</div>
        //     <div className={style.parameter}>Оценка сотрудников: 4.3</div>
        // </div>
        <>
            <div className='absolute custom-left-neg-4 custom-top-neg-14 text-4xl cursor-pointer text-gray-400 hover:text-black' onClick={btnDropDown}>◸</div>

            <div className={dropDownOptions ? "bg-white border rounded-lg px-8 py-6 mx-auto my-8 max-w-2xl fixed top-0" : "bg-white border rounded-lg px-8 py-6 mx-auto my-8 max-w-2xl fixed top-0 hidden" }>
                <h2 className="text-2xl font-medium mb-4">Параметры</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Ключевые слова:</label>
                        <input type="text" id="name" name="name"
                            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="region" className="block text-gray-700 font-medium mb-2">Регион:</label>
                        <select id="region" name="region"
                            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required>
                            <option value="">Россия</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="city" className="block text-gray-700 font-medium mb-2">Город:</label>
                        <select id="city" name="city"
                            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required>
                            <option value="">Россия</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="number" className="block text-gray-700 font-medium mb-2">Зарплата:</label>
                        <input placeholder='От' type="number" id="number" name="number"
                            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required />
                        <input placeholder='До' type="number" id="number" name="number"
                            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Требуемый опыт работы:</label>
                        <div className="flex flex-wrap -mx-2">
                            <div className="px-2 w-1/3">
                                <label htmlFor="animal-cat" className="block text-gray-700 font-medium mb-2">
                                    <input type="checkbox" id="animal-cat" name="animal[]" value="cat" className="mr-2" />Нет опыта
                                </label>
                            </div>
                            <div className="px-2 w-1/3">
                                <label htmlFor="animal-dog" className="block text-gray-700 font-medium mb-2">
                                    <input type="checkbox" id="animal-dog" name="animal[]" value="dog"
                                        className="mr-2" />1-3
                                </label>
                            </div>
                            <div className="px-2 w-1/3">
                                <label htmlFor="animal-bird" className="block text-gray-700 font-medium mb-2">
                                    <input type="checkbox" id="animal-bird" name="animal[]" value="bird" className="mr-2" />3+
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">График работы:</label>
                        <div className="flex flex-wrap -mx-2">
                            <div className="px-2 w-1/4">
                                <label htmlFor="animal-cat" className="block text-gray-700 font-medium mb-2">
                                    <input type="checkbox" id="animal-cat" name="animal[]" value="cat" className="mr-2" />Полный
                                </label>
                            </div>
                            <div className="px-2 w-1/4">
                                <label htmlFor="animal-dog" className="block text-gray-700 font-medium mb-2">
                                    <input type="checkbox" id="animal-dog" name="animal[]" value="dog"
                                        className="mr-2" />Сменный
                                </label>
                            </div>
                            <div className="px-2 w-1/4">
                                <label htmlFor="animal-bird" className="block text-gray-700 font-medium mb-2">
                                    <input type="checkbox" id="animal-bird" name="animal[]" value="bird" className="mr-2" />Частичный
                                </label>
                            </div>
                            <div className="px-2 w-1/4">
                                <label htmlFor="animal-bird" className="block text-gray-700 font-medium mb-2">
                                    <input type="checkbox" id="animal-bird" name="animal[]" value="bird" className="mr-2" />Удаленынй
                                </label>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Submit</button>
                    </div>

                </form>
            </div>
        </>

    )
}
