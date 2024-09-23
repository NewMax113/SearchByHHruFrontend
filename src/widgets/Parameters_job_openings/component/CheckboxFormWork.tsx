import React, { FC, useState } from 'react'
import { ChangeEvent } from 'react'

interface ICheckbox {
    value: string,
    gridPos: number
}
//тут name и id одинакового имени, правильно?
export const CheckboxFormWork: FC<ICheckbox> = ({ value, gridPos }) => {
    console.log(gridPos)
    return (
        <div className={`px-2 w-${gridPos}/4`}>
            <label htmlFor="formWork" className="block text-gray-700 font-medium mb-2">
                <input type="checkbox" id="formWork" name="formWork" value={value}
                    className="mr-2" />{value}
            </label>
        </div>
    )
}
