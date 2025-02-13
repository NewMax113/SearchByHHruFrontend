import { FC } from 'react'
import { Country, City, Salary, RadioInput, CheckboxInput, ButtonParametersVacancy } from '../../featrues'
import { IParametersJobOpenings } from './type/TypeParametersJobOpenings'
import useDropDownOptionsHook from './hooks/useDropDownOptionsHook'
import { CheckboxBlock, IconParameters, ParametersBlock, ParametersForm, RadioBlock } from '../../entities'


const ParametersJobOpenings: FC<IParametersJobOpenings> = ({ setDarkeningTheBackground }) => {
    let { btnDropDown, modalClose, dropDownOptions } = useDropDownOptionsHook({ setDarkeningTheBackground })
    const classLabel = 'block text-gray-700 font-medium mb-2 cursor-pointer'
    const classButton = 'mr-2 py-2 px-2 cursor-pointer'

    return (
        <ParametersBlock id='modal' modalClose={modalClose}>
            {!dropDownOptions && <IconParameters btnDropDown={btnDropDown} />}
            {dropDownOptions && (
                <ParametersForm>
                    <div className="mb-4 ">
                        <label htmlFor="country" className={classLabel}>Регион:</label>
                        <Country id={'country'} />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="city" className={classLabel}>Город:</label>
                        <City id={"city"} />
                    </div>
                    <div className="mb-4 flex hover:border-emerald-400">
                        <label htmlFor="money-input" className={classLabel}>Уровеь дохода:</label>
                        <Salary id={'money-input'} />
                    </div>
                    <RadioBlock>
                        <RadioInput typeInput='radio' value='noExperience' id='Нет опыта' name='work-experience' classLabel={classLabel} classInput={classButton} />
                        <RadioInput typeInput='radio' value='between1And3' id='1-3 года' name='work-experience' classLabel={classLabel} classInput={classButton} />
                        <RadioInput typeInput='radio' value='between3And6' id='3+ года' name='work-experience' classLabel={classLabel} classInput={classButton} />
                    </RadioBlock>
                    <CheckboxBlock>
                        <CheckboxInput typeInput='checkbox' value='fullDay' id='Полный' name='work-schedule' classLabel={`flex ${classLabel}`} classButton={classButton} />
                        <CheckboxInput typeInput='checkbox' value='shift' id='Сменный' name='work-schedule' classLabel={`flex ${classLabel}`} classButton={classButton} />
                        <CheckboxInput typeInput='checkbox' value='remote' id='Удаленынй' name='work-schedule' classLabel={`flex ${classLabel}`} classButton={classButton} />
                    </CheckboxBlock>
                    <div className='flex justify-between'>
                        <ButtonParametersVacancy status={'addParams'} />
                        <ButtonParametersVacancy status={'reset'} />
                    </div>
                </ParametersForm>
            )}
        </ParametersBlock>
    )
}

export default ParametersJobOpenings
