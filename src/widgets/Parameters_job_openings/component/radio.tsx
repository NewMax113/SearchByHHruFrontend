import React, { FC, useState } from 'react'
import { ChangeEvent } from 'react'

interface IRadio {
    value: string,
    type: string,
    gridPos: number
}

export const RadioWorkExperience: FC<IRadio> = ({ value, type, gridPos}) => {
    return (
        <div className={`px-2 w-${gridPos}/3`}>
            <label htmlFor="workExperience" className="block text-gray-700 font-medium mb-2">
                <input type={type} id='workExperience' name='workExperience' value={value} className="mr-2" />{value}
            </label>
        </div>
    )
}
