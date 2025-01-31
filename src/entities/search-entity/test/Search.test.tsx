import { fireEvent, render, screen } from "@testing-library/react"
import Search from "../model/Search"

test('Проверка onChangeEvent', () => {
    const handleChange = jest.fn()
    render(<Search textInput="" handleClick={jest.fn()} onChangeEvent={handleChange}/>)

    const input = screen.getByPlaceholderText('Поиск вакансии')

    fireEvent.change(input, {target: {value: 'React'}})

    expect(handleChange).toHaveBeenCalledTimes(1);
})

test('Проверка handleClick', ()=> {
    const handleClick = jest.fn()
    render(<Search textInput="" handleClick={handleClick} onChangeEvent={jest.fn()}/>)

    const button = screen.getByText('Поиск')

    fireEvent.click(button)

    expect(handleClick).toHaveBeenCalledTimes(1)
})

test('Проверка onSubmit', () => {
    const handleClick = jest.fn();
    const onChangeEvent = jest.fn();
  
    render(<Search textInput="" handleClick={handleClick} onChangeEvent={onChangeEvent} />);
  
    const form = screen.getByTestId('search-form');
    const event = new Event("submit", { bubbles: true, cancelable: true });// Создаём мок-событие с preventDefault

    jest.spyOn(event, "preventDefault"); // Шпионим за preventDefault()
  
    form.dispatchEvent(event);// Диспатчим событие
  
    expect(handleClick).toHaveBeenCalledTimes(1);
    expect(event.preventDefault).toHaveBeenCalledTimes(1);
  });