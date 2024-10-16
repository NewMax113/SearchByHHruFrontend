import React, { createContext, FC, useContext, useState } from 'react';

interface IObjectParams {
    country: string,
    city: string,
    earning: string,
    workExperience: object,
    workSchedule: object,
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
        workExperience: [],
        workSchedule: [],
    },
    updateParameter: () => {}
});

export const ParametersProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
    const [parameters, setParameters] = useState<IObjectParams>({ //нужно указать верный тип
        country: 'Россия',
        city: '',
        earning: '',
        workExperience: [],
        workSchedule: [],
    });

    const updateParameter = (value: object) => {
        setParameters((prev) => ({
            ...prev,
            ...value,
        }));
    };
    console.log(children)
    console.log(parameters)
    return (
        <ParametersContext.Provider value={{ parameters, updateParameter }}>
            {children}
        </ParametersContext.Provider>
    );
};

export const useParameters = () => useContext(ParametersContext);
