import React, { createContext, FC, useContext, useState } from 'react';

interface IWorkExperience {
    noExp: boolean,
    minExp: boolean,
    maxExp: boolean
}

interface IWorkSchedule {
    full: boolean,
    replaceable: boolean,
    remote: boolean
}


interface IObjectParams {
    country: string,
    city: string,
    earning: string,
    workExperience: IWorkExperience,
    workSchedule: IWorkSchedule,
    modification?: object
}

const ParametersContext = createContext<{
    parameters: IObjectParams;
    updateParameter: (value: object) => void;
}>
({
    parameters: {
        country: 'Россия',
        city: '',
        earning: '',
        workExperience: {noExp: false, minExp: false, maxExp: false},
        workSchedule: {full: false, replaceable: false, remote: false,}, //полный, сменный, удаленный
    },
    updateParameter: () => {}
});

export const ParametersProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [parameters, setParameters] = useState<IObjectParams>({ //нужно указать верный тип
        country: 'Россия',
        city: '',
        earning: '',
        workExperience: {noExp: false, minExp: false, maxExp: false},
        workSchedule: {full: false, replaceable: false, remote: false},
    });

    const updateParameter = (value: object) => {
        setParameters((prev) => ({
            ...prev,
            ...value,
        }));
    };

    return (
        <ParametersContext.Provider value={{ parameters, updateParameter }}>
            {children}
        </ParametersContext.Provider>
    );
};

export const useParameters = () => useContext(ParametersContext);
