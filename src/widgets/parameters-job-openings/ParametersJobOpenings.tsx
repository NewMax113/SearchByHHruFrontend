import { FC, useState } from 'react'
import { Country, City, Salary, RadioInput, CheckboxInput, ButtonParametersVacancy } from '../../featrues'
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
                (
                    <div
                        style={{ borderRadius: '20px 0px 0px 0px' }}
                        className='fixed top-32 origin-center rotate-90 -left-8 p-2 pb-5 border bg-white border-blue-500 text-blue-500 hover:-left-7 hover:pb-5'
                        onClick={btnDropDown}>
                        Параметры
                    </div>
                )
            }
            {
                dropDownOptions && (
                    <div className="bg-white border rounded-lg px-8 py-6 mx-auto max-w-2xl fixed top-0" >
                        <div className="text-2xl font-medium mb-4">Параметры</div>
                        <form>
                            <div className="mb-4 ">
                                <label htmlFor="country" className="block text-gray-700 font-medium mb-2 ">Регион:</label>
                                <Country id={'country'} />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="city" className="block text-gray-700 font-medium mb-2">Город:</label>
                                <City id={"city"} />
                            </div>
                            <div className="mb-4 flex hover:border-emerald-400">
                                <label htmlFor="money-input" className="block text-gray-700 font-medium">Уровеь дохода:</label>
                                <Salary id={'money-input'} />
                            </div>
                            <div className="mb-4">
                                <div className="block text-gray-700 font-medium mb-2">Требуемый опыт работы:</div>
                                <div className="flex flex-wrap justify-between">
                                    <RadioInput typeInput='radio' value='noExperience' id='Нет опыта' name='work-experience' classLabel='block text-gray-700 font-medium mb-2 cursor-pointer' classInput='mr-2 cursor-pointer' />
                                    <RadioInput typeInput='radio' value='between1And3' id='1-3 года' name='work-experience' classLabel='block text-gray-700 font-medium mb-2 cursor-pointer' classInput='mr-2 cursor-pointer' />
                                    <RadioInput typeInput='radio' value='between3And6' id='3+ года' name='work-experience' classLabel='block text-gray-700 font-medium mb-2 cursor-pointer' classInput='mr-2 cursor-pointer' />
                                </div>
                            </div>
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">График работы:</label>
                                <div className="flex flex-wrap justify-between">
                                    <CheckboxInput typeInput='checkbox' value='fullDay' id='Полный' name='work-schedule' classLabel='flex block text-gray-700 font-medium mb-2 cursor-pointer' classButton='mr-2 py-2 px-2 cursor-pointer' />
                                    <CheckboxInput typeInput='checkbox' value='shift' id='Сменный' name='work-schedule' classLabel='flex block text-gray-700 font-medium mb-2 cursor-pointer' classButton='mr-2 py-2 px-2 cursor-pointer' />
                                    <CheckboxInput typeInput='checkbox' value='remote' id='Удаленынй' name='work-schedule' classLabel='flex block text-gray-700 font-medium mb-2 cursor-pointer' classButton='mr-2 py-2 px-2 cursor-pointer' />
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <ButtonParametersVacancy status={'addParams'} />
                                <ButtonParametersVacancy status={'reset'} />
                            </div>
                        </form>
                    </div>
                )
            }
        </div >
    )
}

export default ParametersJobOpenings
