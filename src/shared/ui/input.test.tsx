import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Input from "./input";
import userEvent from "@testing-library/user-event";

test("Тест на ввод текста", () => {
    const handleChange = jest.fn(); 

    render(<Input typeInput="text" value="" onChange={handleChange} placeholder="Введите текст" />);

    const input = screen.getByPlaceholderText("Введите текст");

    userEvent.type(input, "Hello"); 

    expect(handleChange).toHaveBeenCalledTimes(5); 
});
