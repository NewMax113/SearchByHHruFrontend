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
import { Select1 } from './Select1'
import { Select2 } from './Select2'
import { InputValue } from './InputValue'
import { RadioWorkExperience } from './radio'
import { CheckboxFormWork } from './CheckboxFormWork'

export const Parameters_job_openings: FC = () => {
    const dispatch: any = useDispatch<AppDispatch>()
    const city = useSelector<IRootState, any>(state => state.params.citys)
    const regions = useSelector<IRootState, any>(state => state.params.regions)
    let [dropDownOptions, setDropDownOptions] = useState<boolean>(false)
    const workExperience: string[] = ['Нет опыта', '1-3', '3+']
    const formatWork: string[] = ['Полный', 'Сменный', 'Частичный', 'Удаленный']
    console.log(regions)
    console.log(city)

    const btnDropDown = () => {
        setDropDownOptions(!dropDownOptions)
    }
    console.log(dropDownOptions)

    useEffect(() => {
        console.log('Бесконечно')
        let setReg = async () => {
            await dispatch(setRegions(await getRegions()))
            await dispatch(setRegionsArray('Россия'))
        }
        setReg()


    }, [])
//неправильно работает выбор


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

            <div className={dropDownOptions ? "bg-white border rounded-lg px-8 py-6 mx-auto my-8 max-w-2xl fixed top-0" : "bg-white border rounded-lg px-8 py-6 mx-auto my-8 max-w-2xl fixed top-0 hidden"}>
                <h2 className="text-2xl font-medium mb-4">Параметры</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Ключевые слова:</label>
                        <input type="text" id="name" name="name"
                            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" required />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="region" className="block text-gray-700 font-medium mb-2">Регион:</label>
                        <Select1 regions={regions} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="city" className="block text-gray-700 font-medium mb-2">Город:</label>
                        <Select2 city={city} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="number" className="block text-gray-700 font-medium mb-2">Зарплата:</label>
                        <InputValue />
                        <InputValue />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Требуемый опыт работы:</label>
                        <div className="flex flex-wrap -mx-2">
                            <div className="px-2 w-1/3">
                                <label htmlFor="radio1" className="block text-gray-700 font-medium mb-2">
                                    <input type="radio" id="radio1" name="work-experience" value="cat" className="mr-2" />Нет опыта
                                </label>
                            </div>
                            <div className="px-2 w-1/3">
                                <label htmlFor="radio2" className="block text-gray-700 font-medium mb-2">
                                    <input type="radio" id="radio2" name="work-experience" value="dog"
                                        className="mr-2" />1-3
                                </label>
                            </div>
                            <div className="px-2 w-1/3">
                                <label htmlFor="radio3" className="block text-gray-700 font-medium mb-2">
                                    <input type="radio" id="radio3" name="work-experience" value="bird" className="mr-2" />3+
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">График работы:</label>
                        <div className="flex flex-wrap -mx-2">
                            <div className="px-2 w-1/4">
                                <label htmlFor="checkbox1" className="block text-gray-700 font-medium mb-2">
                                    <input type="checkbox" id="checkbox1" name="work-schedule" value="cat" className="mr-2" />Полный
                                </label>
                            </div>
                            <div className="px-2 w-1/4">
                                <label htmlFor="checkbox2" className="block text-gray-700 font-medium mb-2">
                                    <input type="checkbox" id="checkbox2" name="work-schedule" value="dog"
                                        className="mr-2" />Сменный
                                </label>
                            </div>
                            <div className="px-2 w-1/4">
                                <label htmlFor="checkbox3" className="block text-gray-700 font-medium mb-2">
                                    <input type="checkbox" id="checkbox3" name="work-schedule" value="bird" className="mr-2" />Частичный
                                </label>
                            </div>
                            <div className="px-2 w-1/4">
                                <label htmlFor="checkbox4" className="block text-gray-700 font-medium mb-2">
                                    <input type="checkbox" id="checkbox4" name="animal[]" value="bird" className="mr-2" />Удаленынй
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
