import { FC, useState } from 'react'
import Select1 from './Select1'
import Select2 from './Select2'
import InputValue from './InputValue'
import Input from '../../../UI/input'
import useParametersJob from '../../../hooks/useParametersJob'

export const Parameters_job_openings: FC = () => {
    let { city, regions } = useParametersJob()
    let [dropDownOptions, setDropDownOptions] = useState<boolean>(false)
    const btnDropDown = () => {
        setDropDownOptions(!dropDownOptions)
    }

    return (
        <div>
            <div className='custom-left-neg-4 custom-top-neg-14 text-4xl cursor-pointer text-gray-400 z-10 fixed hover:text-black' onClick={btnDropDown}>◸</div>

            <div className={dropDownOptions ? "bg-white border rounded-lg px-8 py-6 mx-auto max-w-2xl fixed top-0" : "hidden"}>
                <h2 className="text-2xl font-medium mb-4">Параметры</h2>
                <form>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Ключевые слова:</label>
                        <input type="text" id="name" name="name"
                            className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400" />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="region" className="block text-gray-700 font-medium mb-2">Регион:</label>
                        <Select1 regions={regions} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="city" className="block text-gray-700 font-medium mb-2">Город:</label>
                        <Select2 city={city} classLabel='block text-gray-700 font-medium mb-2' nameLabel='Город:' htmlFor='city' />
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
                                <Input type='radio' value='Нет опыта' id='radio1' name='work-experience' classLabel='block text-gray-700 font-medium mb-2' classInput='mr-2' />
                            </div>
                            <div className="px-2 w-1/3">
                                <Input type='radio' value='1-3' id='radio2' name='work-experience' classLabel='block text-gray-700 font-medium mb-2' classInput='mr-2' />
                            </div>
                            <div className="px-2 w-1/3">
                                <Input type='radio' value='3+' id='radio3' name='work-experience' classLabel='block text-gray-700 font-medium mb-2' classInput='mr-2' />
                            </div>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">График работы:</label>
                        <div className="flex flex-wrap -mx-2">
                            <div className="px-2 w-1/4">
                                <Input type='checkbox' value='Полный' id='checkbox1' name='work-schedule' classLabel='block text-gray-700 font-medium mb-2' classInput='mr-2' />
                            </div>
                            <div className="px-2 w-1/4">
                                <Input type='checkbox' value='Сменный' id='checkbox2' name='work-schedule' classLabel='block text-gray-700 font-medium mb-2' classInput='mr-2' />
                            </div>
                            <div className="px-2 w-1/4">
                                <Input type='checkbox' value='Частичный' id='checkbox3' name='work-schedule' classLabel='block text-gray-700 font-medium mb-2' classInput='mr-2' />
                            </div>
                            <div className="px-2 w-1/4">
                                <Input type='checkbox' value='Удаленынй' id='checkbox4' name='work-schedule' classLabel='block text-gray-700 font-medium mb-2' classInput='mr-2' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Принять</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
