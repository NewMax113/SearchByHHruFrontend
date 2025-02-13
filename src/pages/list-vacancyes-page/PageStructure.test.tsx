import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom";
import PageStructure from "./PageStructure"
import React, { ReactNode } from "react"
import userEvent from "@testing-library/user-event";


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
    <button onClick={() => { setLoading(false); setBeingVacansies(false) }}>Search</button>
  ),
  ListJobOpenings: ({ loading }: any) => <div>{loading ? 'Loading...' : 'Jobs Loaded'}</div>
}));

jest.mock('../../featrues', () => ({
  ListBottomConteiner: ({ setLoading }: any) => {
    return (<div>listBottom setLoading={String(setLoading)} </div>)
  }
}))

describe('testing PageStructure', () => {
  test('test render components page', () => {

    render(<PageStructure />)
    
    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByTestId('logo')).toBeInTheDocument()
    expect(screen.getByText('exit')).toBeInTheDocument()
    expect(screen.getByTestId('main')).toBeInTheDocument()

    expect(screen.getByText('Loading...')).toBeInTheDocument()
    expect(screen.getByText('listBottom setLoading=function () { [native code] }')).toBeInTheDocument();
  })

  test('loading and beingVacansies states change on search', () => {
    render(<PageStructure />)

    expect(screen.getByText('Loading...')).toBeInTheDocument()

    userEvent.click(screen.getByText('Search'))

    expect(screen.getByText('Jobs Loaded')).toBeInTheDocument()
  })

  test('Shows job listings when loading is false', () => {
    jest.spyOn(React, 'useState')
      .mockImplementationOnce(() => [false, jest.fn()])

    render(<PageStructure />)

    expect(screen.getByText('Jobs Loaded')).toBeInTheDocument()
  })
})