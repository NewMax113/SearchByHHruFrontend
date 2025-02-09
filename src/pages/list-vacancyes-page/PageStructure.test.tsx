import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom";
import PageStructure from "./PageStructure"
import { ReactNode } from "react"


jest.mock('../../entities', () => ({
    Header: ({ children }: { children: ReactNode }) => (
        <div data-testid="header">{children}</div>
    ),
    Logo: () => (<div data-testid='logo'>logo</div>),
    Exit: () => (<button>exit</button>),
    Main: ({ children }: { children: ReactNode }) => (
        <div data-testid="main">{children}</div> 
    )
}))

jest.mock("../../widgets", () => ({
    SearchJobOpenings: ({ setLoading, setBeingVacansies }: any) => (
      <div>
        search setLoading={String(setLoading)} setBeingVacansies={String(setBeingVacansies)}
      </div>
    ),
    ListJobOpenings: ({ loading, setLoading, beingVacansies }: any) => (
      <div>
        list loading={String(loading)} setLoading={String(setLoading)} beingVacansies={String(beingVacansies)}
      </div>
    )
  }));

jest.mock('../../featrues', () => ({
    ListBottomConteiner: ({ setLoading }: any) => {
        return (<div>listBottom setLoading={String(setLoading)} </div>)
    }
}))

describe('testing PageStructure', () => {
    test('test render components page', () => {
        
        render(<PageStructure />)
        screen.debug()
        expect(screen.getByTestId('header')).toBeInTheDocument()
        expect(screen.getByTestId('logo')).toBeInTheDocument()
        expect(screen.getByText('exit')).toBeInTheDocument()
        expect(screen.getByTestId('main')).toBeInTheDocument()
        
        expect(screen.getByText('list loading=true setLoading=function () { [native code] } beingVacansies=true')).toBeInTheDocument()
        expect(screen.getByText('search setLoading=function () { [native code] } setBeingVacansies=function () { [native code] }')).toBeInTheDocument();
        expect(screen.getByText('listBottom setLoading=function () { [native code] }')).toBeInTheDocument();
    })
})