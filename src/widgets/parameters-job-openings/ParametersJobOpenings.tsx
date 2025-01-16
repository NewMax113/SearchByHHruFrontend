import { FC, useState } from 'react'
import {Country, City, Salary, RadioInput, CheckboxInput, ButtonParametersVacancy} from '../../featrues'
import { IParametersJobOpenings } from './type/TypeParametersJobOpenings'


const ParametersJobOpenings: FC<IParametersJobOpenings> = ({ setDarkeningTheBackground }) => {
    let [dropDownOptions, setDropDownOptions] = useState<boolean>(false)

    const btnDropDown = () => {
        setDropDownOptions(!dropDownOptions)
        setDarkeningTheBackground(!dropDownOptions)
    }

    const modalClose = () => {
        document.addEventListener('mouseup', (e: Event) => {
            let container = document.getElementById('modal') as HTMLDivElement | null;

            if (container && !container.contains(e.target as Node)) {
                setDropDownOptions(false)
                setDarkeningTheBackground(false)
            }
        });
    }

    return (
        <div id='modal' onClick={modalClose}>
            {!dropDownOptions &&
                (<div className='custom-left-neg-4 custom-top-neg-14 text-4xl cursor-pointer text-gray-400 fixed hover:text-black' onClick={btnDropDown}>◸</div>)}
            {dropDownOptions && (
                <div className="bg-white border rounded-lg px-8 py-6 mx-auto max-w-2xl fixed top-0" >
                    <div className="text-2xl font-medium mb-4">Параметры</div>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="country" className="block text-gray-700 font-medium mb-2">Регион:</label>
                            <Country id={'country'}/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="city" className="block text-gray-700 font-medium mb-2">Город:</label>
                            <City id={"city"}/>
                        </div>
                        <div className="mb-4 flex">
                            <label htmlFor="money-input" className="block text-gray-700 font-medium">Уровеь дохода:</label>
                            <Salary id={'money-input'} />
                        </div>
                        <div className="mb-4">
                            <div className="block text-gray-700 font-medium mb-2">Требуемый опыт работы:</div>
                            <div className="flex flex-wrap -mx-2">
                                <RadioInput typeInput='radio' value='noExperience' id='Нет опыта' name='work-experience' classLabel='block text-gray-700 font-medium mb-2 cursor-pointer' classInput='mr-2 cursor-pointer' />
                                <RadioInput typeInput='radio' value='between1And3' id='1-3 года' name='work-experience' classLabel='block text-gray-700 font-medium mb-2 cursor-pointer' classInput='mr-2 cursor-pointer' />
                                <RadioInput typeInput='radio' value='between3And6' id='3+ года' name='work-experience' classLabel='block text-gray-700 font-medium mb-2 cursor-pointer' classInput='mr-2 cursor-pointer' />
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">График работы:</label>
                            <div className="flex flex-wrap -mx-2">
                                <CheckboxInput typeInput='checkbox' value='fullDay' id='Полный' name='work-schedule' classLabel='flex block text-gray-700 font-medium mb-2 px-2 cursor-pointer' classButton='mr-2 py-2 px-2 cursor-pointer' />
                                <CheckboxInput typeInput='checkbox' value='shift' id='Сменный' name='work-schedule' classLabel='flex block text-gray-700 font-medium mb-2 px-2 cursor-pointer' classButton='mr-2 py-2 px-2 cursor-pointer' />
                                <CheckboxInput typeInput='checkbox' value='remote' id='Удаленынй' name='work-schedule' classLabel='flex block text-gray-700 font-medium mb-2 px-2 cursor-pointer' classButton='mr-2 py-2 px-2 cursor-pointer' />
                            </div>
                        </div>
                        <div>
                            <ButtonParametersVacancy/>
                            {/* <Button style={"ml-1 border text-black px-4 py-2 rounded-lg hover:bg-slate-100"} text={'Сбросить'}></Button> */}
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}

export default ParametersJobOpenings
