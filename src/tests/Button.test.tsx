import React from 'react';
import { render } from '@testing-library/react';
import { Button } from '../components/Button/Button';

test('renders Button', () => {
  const button = render(<Button label="Button" />);
  expect(button).toBeInTheDocument();
});
