import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './bookingForm';
import { initializeTimes, updateTimes } from './Main';
import * as api from './Api';

test('renders the bookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Reserve Table Form");
  expect(headingElement).toBeInTheDocument();
});

test('validate the correct expected value of the initializeTimes function', () => {
   jest.spyOn(api, 'fetchAPI').mockReturnValue(["16:00", "17:00", "18:00"]);

  const times = initializeTimes();
   expect(times.length).toBeGreaterThan(0);
});

test('validate the updateTimes returns the same state as it receives', () => {
  const state = [
    "16:00",
    "17:00",
    "18:00",
  ];
  
  const action = { type: "UPDATE_TIMES", date: "2026-01-01" };
 
  const result = updateTimes(state, action);

  expect(result).toEqual(state);
});

test("writes booking data to localStorage on submit", () => {
  jest.spyOn(Storage.prototype, "setItem");

  render(
    <BookingForm
      availableTimes={["16:00"]}
      dispatch={jest.fn()}
      submitForm={(data) => {
        localStorage.setItem("booking", JSON.stringify(data));
        return true;
      }}
    />
  );

  fireEvent.change(screen.getByLabelText(/select date/i), {
    target: { value: "2026-01-01" },
  });

  fireEvent.change(screen.getByLabelText(/select time/i), {
    target: { value: "16:00" },
  });

  fireEvent.click(screen.getByText(/submit/i));

  expect(localStorage.setItem).toHaveBeenCalled();
});

test("reads booking data from localStorage on mount", () => {
  const mockBooking = {
    date: "2026-01-02",
    time: "17:00",
    guests: 2,
    occasion: "Birthday",
  };

  jest
    .spyOn(Storage.prototype, "getItem")
    .mockReturnValue(JSON.stringify(mockBooking));

  render(
    <BookingForm
      availableTimes={["17:00"]}
      dispatch={jest.fn()}
      submitForm={jest.fn()}
    />
  );

  expect(screen.getByLabelText(/select date/i).value).toBe("2026-01-02");
  expect(screen.getByLabelText(/select time/i).value).toBe("17:00");
});

test("date input has required attribute and correct type", () => {
   render(<BookingForm availableTimes={[]} dispatch={jest.fn()} submitForm={jest.fn()} />);

  const dateInput = screen.getByLabelText(/select date/i);

  expect(dateInput).toHaveAttribute('type', 'date');
  expect(dateInput).toBeRequired();
})
test("select a time is required", () => {
  render (<BookingForm availableTimes={["16:00"]} dispatch={jest.fn} submitForm={jest.fn}/>);
  const timeInput = screen.getByLabelText(/select time/i); 
  expect(timeInput).toBeRequired();
  })
test("Select the number of guests", () => {
  render(<BookingForm availableTimes={["16:00"]} dispatch={jest.fn} submitForm={jest.fn}/>);
  const guestInput = screen.getByLabelText(/number of guests/i);
  expect(guestInput).toHaveAttribute('type', 'number');
  expect(guestInput).toHaveAttribute('min', '1');
  expect(guestInput).toHaveAttribute('max', '10');
  expect(guestInput).toBeRequired();
})
test("Submit button", () =>{
  render(<BookingForm availableTimes={[]} dispatch={jest.fn} submitForm={jest.fn}/>);
  const submitInput = screen.getByRole('button', {name: /submit/i});
  expect(submitInput).toBeDisabled();
})