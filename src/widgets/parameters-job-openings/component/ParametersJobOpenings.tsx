import { FC, useEffect, useState } from 'react'
import { Button } from '../../../ui'
import { setBodyRequest } from '../model/params-reducer'
import { useDispatch } from 'react-redux'
import { AppDispatch, IRootState } from '../model/reducer'
import RadioInputContainer from './RadioInputContainer'
import CheckboxInputContainer from './CheckboxInputContainer'
import CountrySelectionContainer from './CountrySelectionContainer'
import CitySelectionContainer from './CitySelectionContainer'
import SalaryInputModalContainer from './SalaryInputModalContainer'

const ParametersJobOpenings: FC<any> = ({ setDarkeningTheBackground }) => {
    const dispatch: any = useDispatch<AppDispatch>()
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

    return (
        <div id='modal' onClick={modalClose}>
            {!dropDownOptions &&
                (<div className='custom-left-neg-4 custom-top-neg-14 text-4xl cursor-pointer text-gray-400 fixed hover:text-black' onClick={btnDropDown}>◸</div>)}
            {dropDownOptions && (
                <div className="bg-white border rounded-lg px-8 py-6 mx-auto max-w-2xl fixed top-0" >
                    <h2 className="text-2xl font-medium mb-4">Параметры</h2>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="country" className="block text-gray-700 font-medium mb-2">Регион:</label>
                            <CountrySelectionContainer id={'country'}/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="city" className="block text-gray-700 font-medium mb-2">Город:</label>
                            <CitySelectionContainer id={"city"}/>
                        </div>
                        <div className="mb-4 flex">
                            <label htmlFor="money-input" className="block text-gray-700 font-medium">Уровеь дохода:</label>
                            <SalaryInputModalContainer id={'money-input'} />
                        </div>
                        <div className="mb-4">
                            <div className="block text-gray-700 font-medium mb-2">Требуемый опыт работы:</div>
                            <div className="flex flex-wrap -mx-2">
                                <RadioInputContainer typeInput='radio' value='noExperience' id='Нет опыта' name='work-experience' classLabel='block text-gray-700 font-medium mb-2 cursor-pointer' classInput='mr-2 cursor-pointer' />
                                <RadioInputContainer typeInput='radio' value='between1And3' id='1-3 года' name='work-experience' classLabel='block text-gray-700 font-medium mb-2 cursor-pointer' classInput='mr-2 cursor-pointer' />
                                <RadioInputContainer typeInput='radio' value='between3And6' id='3+ года' name='work-experience' classLabel='block text-gray-700 font-medium mb-2 cursor-pointer' classInput='mr-2 cursor-pointer' />
                            </div>
                        </div>
                        <div>
                            <label className="block text-gray-700 font-medium mb-2">График работы:</label>
                            <div className="flex flex-wrap -mx-2">
                                <CheckboxInputContainer typeInput='checkbox' value='fullDay' id='Полный' name='work-schedule' classLabel='flex block text-gray-700 font-medium mb-2 px-2 cursor-pointer' classButton='mr-2 py-2 px-2 cursor-pointer' />
                                <CheckboxInputContainer typeInput='checkbox' value='shift' id='Сменный' name='work-schedule' classLabel='flex block text-gray-700 font-medium mb-2 px-2 cursor-pointer' classButton='mr-2 py-2 px-2 cursor-pointer' />
                                <CheckboxInputContainer typeInput='checkbox' value='remote' id='Удаленынй' name='work-schedule' classLabel='flex block text-gray-700 font-medium mb-2 px-2 cursor-pointer' classButton='mr-2 py-2 px-2 cursor-pointer' />
                            </div>
                        </div>
                        <div>
                            <Button classButton={"bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"} text={'Принять'} onClick={() => (dispatch(setBodyRequest()))}></Button>
                            {/* <Button style={"ml-1 border text-black px-4 py-2 rounded-lg hover:bg-slate-100"} text={'Сбросить'}></Button> */}
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}

export default ParametersJobOpenings
