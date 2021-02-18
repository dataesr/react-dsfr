import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Container from '.';

it('renders Container properly', () => {
  render(
    <Container>Text</Container>,
  );
  const row = screen.getByText('Text');
  expect(row).toBeInTheDocument();
  expect(row.className).toBe('rf-container');
});

it('renders Container fluid properly', () => {
  render(
    <Container fluid>Text</Container>,
  );
  const row = screen.getByText('Text');
  expect(row).toBeInTheDocument();
  expect(row.className).toBe('rf-container-fluid');
});
