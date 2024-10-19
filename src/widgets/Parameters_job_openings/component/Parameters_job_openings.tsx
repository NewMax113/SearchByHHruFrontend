import { FC, useState } from 'react'
import Select1 from './Select1'
import Select2 from './Select2'
import InputValue from './InputValue'
import Input from '../../../UI/input'
import Button from '../../../UI/button'
import useParametersJob from '../../../hooks/useParametersJob'
import { ParametersProvider } from '../../../hooks/useParametersContext'

export const Parameters_job_openings: FC<any> = ({ setDarkeningTheBackground }) => {
    let { city, regions } = useParametersJob()
    let [dropDownOptions, setDropDownOptions] = useState<boolean>(false)
    const btnDropDown = () => {
        setDropDownOptions(!dropDownOptions)
        setDarkeningTheBackground(!dropDownOptions)

    }
    const modalClose = (e: any) => {
        document.addEventListener('mouseup', function (e) {
            let container: any = document.getElementById('modal');

            if (!container.contains(e.target)) {
                setDropDownOptions(false)
                setDarkeningTheBackground(false)
            }
        });
    }
    //https://samara.hh.ru/search/vacancy?text=React&area=78&hhtmFrom=main&hhtmFromLabel=vacancy_search_line
    //https://samara.hh.ru/search/vacancy?L_save_area=true&text=React&excluded_text=&area=78&salary=100000&currency_code=RUR&experience=between1And3&schedule=shift&schedule=flexible&order_by=relevance&search_period=0&items_on_page=50&hhtmFrom=vacancy_search_filter

    return (
        <ParametersProvider>
            <div id='modal' onClick={modalClose}>
                {!dropDownOptions &&
                    (<div className='custom-left-neg-4 custom-top-neg-14 text-4xl cursor-pointer text-gray-400 fixed hover:text-black' onClick={btnDropDown}>◸</div>)}
                {dropDownOptions && (
                    <div className="bg-white border rounded-lg px-8 py-6 mx-auto max-w-2xl fixed top-0" >
                        <h2 className="text-2xl font-medium mb-4">Параметры</h2>
                        <form>
                            <div className="mb-4">
                                <label htmlFor="region" className="block text-gray-700 font-medium mb-2">Регион:</label>
                                <Select1 regions={regions} />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="city" className="block text-gray-700 font-medium mb-2">Город:</label>
                                <Select2 city={city} classLabel='block text-gray-700 font-medium mb-2' nameLabel='Город:' htmlFor='city' />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="number" className="block text-gray-700 font-medium mb-2">Уровеь дохода:
                                    <InputValue />
                                </label>

                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2">Требуемый опыт работы:</label>
                                <div className="flex flex-wrap -mx-2">
                                    <div className="px-2">
                                        <Input typeInput='radio' value='Нет опыта' text='Нет опыта' id='radio1' name='work-experience' classLabel='block text-gray-700 font-medium mb-2 cursor-pointer' classInput='mr-2 cursor-pointer' />
                                    </div>
                                    <div className="px-2">
                                        <Input typeInput='radio' value='1-3' text='1-3' id='radio2' name='work-experience' classLabel='block text-gray-700 font-medium mb-2 cursor-pointer' classInput='mr-2 cursor-pointer' />
                                    </div>
                                    <div className="px-2">
                                        <Input typeInput='radio' value='3+' text='3+' id='radio3' name='work-experience' classLabel='block text-gray-700 font-medium mb-2 cursor-pointer' classInput='mr-2 cursor-pointer' />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">График работы:</label>
                                <div className="flex flex-wrap -mx-2">
                                    <div>
                                        <Input typeInput='button' value='Полный' id='checkbox1' name='work-schedule' classLabel='flex block text-gray-700 font-medium mb-2' classInput='mr-2 py-2 px-2 cursor-pointer' />
                                    </div>
                                    <div >
                                        <Input typeInput='button' value='Сменный' id='checkbox2' name='work-schedule' classLabel='flex block text-gray-700 font-medium mb-2' classInput='mr-2 py-2 px-2 cursor-pointer' />
                                    </div>
                                    {/* <div >
                                        <Input typeInput='button' value='Частичный' id='checkbox3' name='work-schedule' classLabel='flex block text-gray-700 font-medium mb-2' classInput='mr-2 py-2 px-2 cursor-pointer' />
                                    </div> */}
                                    <div>
                                        <Input typeInput='button' value='Удаленынй' id='checkbox4' name='work-schedule' classLabel='flex block text-gray-700 font-medium mb-2' classInput='mr-2 py-2 px-2 cursor-pointer' />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <Button style={"bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"} text={'Принять'}></Button>
                                <Button style={"ml-1 border text-black px-4 py-2 rounded-lg hover:bg-slate-100"} text={'Сбросить'}></Button>
                            </div>
                        </form>
                    </div>
                )}
            </div>
        </ParametersProvider>
    )
}
