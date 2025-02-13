import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom";
import Button from "../ui/button"

test('Отрисовка кнопки с определенным текстом', ()=> {
    render(<Button classButton="" text="Кликни на меня"></Button>)
    expect(screen.getByText("Кликни на меня")).toBeInTheDocument()
})

test('Клик вызывает обработчик', ()=> {
    const handleClick = jest.fn();
    
    render(<Button classButton="" text="Клик" onClick={handleClick}></Button>)
    fireEvent.click(screen.getByText("Клик")); 
    expect(handleClick).toHaveBeenCalledTimes(1)
})