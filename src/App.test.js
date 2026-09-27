import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './BookingForm';
import { initializeTimes, updateTimes } from './bookingUtils';

test('renders the Choose date label', () => {
  render(
    <BookingForm
      availableTimes={initializeTimes()}
      dispatch={() => {}}
    />
  );

  const labelElement = screen.getByText('Choose date');
  expect(labelElement).toBeInTheDocument();
});

test('initializeTimes returns available booking times', () => {
  const times = initializeTimes();

  expect(Array.isArray(times)).toBe(true);
  expect(times.length).toBeGreaterThan(0);
});

test('updateTimes returns available times for the selected date', () => {
  const state = [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ];

  const action = {
    type: 'UPDATE_TIMES',
    date: '2026-09-30',
  };

  const times = updateTimes(state, action);

  expect(Array.isArray(times)).toBe(true);
  expect(times.length).toBeGreaterThan(0);
});

test('BookingForm applies HTML5 validation attributes', () => {
  render(
    <BookingForm
      availableTimes={initializeTimes()}
      dispatch={() => {}}
      submitForm={() => {}}
    />
  );

  const dateInput = screen.getByLabelText('Choose date');
  const timeSelect = screen.getByLabelText('Choose time');
  const guestsInput = screen.getByLabelText('Number of guests');
  const occasionSelect = screen.getByLabelText('Occasion');

  expect(dateInput).toBeRequired();
  expect(dateInput).toHaveAttribute('min');

  expect(timeSelect).toBeRequired();

  expect(guestsInput).toBeRequired();
  expect(guestsInput).toHaveAttribute('min', '1');
  expect(guestsInput).toHaveAttribute('max', '10');

  expect(occasionSelect).toBeRequired();
});

test('submit button is disabled when the form is invalid', () => {
  render(
    <BookingForm
      availableTimes={initializeTimes()}
      dispatch={() => {}}
      submitForm={() => {}}
    />
  );

  const submitButton = screen.getByRole('button', {
    name: 'Make Your Reservation',
  });

  expect(submitButton).toBeDisabled();
});

test('submit button is enabled when the form is valid', () => {
  render(
    <BookingForm
      availableTimes={initializeTimes()}
      dispatch={() => {}}
      submitForm={() => {}}
    />
  );

  const dateInput = screen.getByLabelText('Choose date');
  const submitButton = screen.getByRole('button', {
    name: 'Make Your Reservation',
  });

  fireEvent.change(dateInput, {
    target: { value: '2026-10-01' },
  });

  expect(submitButton).toBeEnabled();
});



