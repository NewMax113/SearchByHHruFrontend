import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom";
import ListJobOpenings from "./ListJobOpenings";

jest.mock('../error-widget/ErrorWidget', () => ({
    __esModule: true,
    default: () => <div>Error</div>
}));

jest.mock('../../featrues', () => ({
    ListVacancy: ({ setLoading }: any) => <div>List</div>
}));

jest.mock('../loading-list-openings/LoadingListOpenings', () => ({
    __esModule: true,
    default: () => <div>Loading</div>
}));

describe('test ListJobOpenings', () => {
    test('test return error', async () => {
        const mockSetLoading = jest.fn();
        render(<ListJobOpenings beingVacansies={false} loading={false} setLoading={mockSetLoading} />)

        expect(screen.getByText('Error')).toBeInTheDocument()
    })

    test('test return List', async () => {
        const mockSetLoading = jest.fn();
        render(<ListJobOpenings beingVacansies={true} loading={false} setLoading={mockSetLoading} />)

        expect(screen.getByText('List')).toBeInTheDocument()
    })

    test('test return Loading', async () => {
        const mockSetLoading = jest.fn();
        render(<ListJobOpenings beingVacansies={true} loading={true} setLoading={mockSetLoading} />)

        expect(screen.getByText('Loading')).toBeInTheDocument()
    })
})