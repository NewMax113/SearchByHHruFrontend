import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom";
import Select from "../ui/select"
import userEvent from "@testing-library/user-event";


test('Выбор Option при клике и проверка', async () => {
    const handleChange = jest.fn()
    const options = ["Россия", "Беларусь", "Казахстан"];

    render(<Select id="select" classSelect="" required valueOption={options} onChange={handleChange} />);

    const select = screen.getByRole("combobox");

    options.forEach(option => {
        expect(screen.getByText(option)).toBeInTheDocument();
    })

    userEvent.selectOptions(select, 'Россия')

    expect(handleChange).toHaveBeenCalledTimes(1);

    expect(select).toHaveValue("Россия");
})