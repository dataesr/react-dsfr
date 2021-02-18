import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Row from '.';

it('renders Row properly', () => {
  render(
    <Row>Text</Row>,
  );
  const row = screen.getByText('Text');
  expect(row).toBeInTheDocument();
  expect(row.className).toBe('rf-grid-row');
});

it('renders Row with gutter properly', () => {
  render(
    <Row gutter>Text</Row>,
  );
  const row = screen.getByText('Text');
  expect(row).toBeInTheDocument();
  expect(row.className).toBe('rf-grid-row--gutter');
});

it('renders Row with alignItems properly', () => {
  render(
    <Row alignItems='middle'>Text</Row>,
  );
  const row = screen.getByText('Text');
  expect(row).toBeInTheDocument();
  expect(row.className).toContain('rf-grid-row--middle');
});

it('renders Row with justifyContent properly', () => {
  render(
    <Row justifyContent='center'>Text</Row>,
  );
  const row = screen.getByText('Text');
  expect(row).toBeInTheDocument();
  expect(row.className).toContain('rf-grid-row--center');
});

it('renders Row offset and n properly', () => {
  render(
    <Row gutter alignItems='middle' justifyContent='center'>Text</Row>,
  );
  const row = screen.getByText('Text');
  expect(row).toBeInTheDocument();
  expect(row.className).toContain('rf-grid-row--center');
  expect(row.className).toContain('rf-grid-row--middle');
  expect(row.className).toContain('rf-grid-row--gutter');
});
