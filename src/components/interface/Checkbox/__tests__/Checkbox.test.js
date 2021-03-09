import { render, screen } from '@testing-library/react';
import { Checkbox } from '../index';

describe('<Checkbox />', () => {
  it('in document', () => {
    render(
      <Checkbox
        label="Label de la checkbox"
        value="value"
      />,
    );
    const search = screen.getByTestId('checkbox-testid');
    expect(search).toBeInTheDocument();
  });

  // test de la présence de la class rf-checkbox-group
  it('has rf-checkbox-group class', () => {
    const { container } = render(
      <Checkbox
        label="Label de la checkbox"
        value="value"
      />,
    );
    expect(container.getElementsByClassName('rf-checkbox-group').length).toBe(1);
  });

  // test de la class d'erreur
  it('has rf-select class', () => {
    const { container } = render(
      <Checkbox
        label="Label de la checkbox"
        value="value"
        messageType="error"
      />,
    );
    expect(container.getElementsByClassName('rf-checkbox-group--error').length).toBe(1);
  });
});
