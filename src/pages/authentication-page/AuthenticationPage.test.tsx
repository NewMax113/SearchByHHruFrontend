import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom";
import AuthenticationPage from "./AuthenticationPage";
import useSavingTokenViaTheApi from "../../app/hooks/useSavingTokenViaTheApi";
import * as reactRouter from "react-router";

jest.mock('react-router', () => ({
    useNavigate: jest.fn()
}))

jest.mock('../../app/hooks/useSavingTokenViaTheApi', () => ({
    __esModule: true, 
    default: jest.fn() 
}))

describe('testing AuthenticationPage', () => {
    test('test navigation', () => {
        const mockNavigate = jest.fn();
        (reactRouter.useNavigate as jest.Mock).mockReturnValue(mockNavigate);
        (useSavingTokenViaTheApi as jest.Mock).mockImplementation(({ code }) => ({
            cookieToken: 'abc',
            error: null
        }))

        render(<AuthenticationPage />)

        expect(mockNavigate).toHaveBeenCalledWith('/')
    })

    test('display of emptiness', () => {
        (useSavingTokenViaTheApi as jest.Mock).mockImplementation(({ code }) => ({
            cookieToken: null,
            error: 'error'
        }))

        render(<AuthenticationPage />)

        expect(screen.getByText('Вход')).toBeInTheDocument()
    })
})