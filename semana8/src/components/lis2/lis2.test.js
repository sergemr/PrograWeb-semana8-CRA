import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Lis2 from './Lis2';

describe('<Lis2 />', () => {
  test('it should mount', () => {
    render(<Lis2 />);
    
    const lis2 = screen.getByTestId('Lis2');

    expect(lis2).toBeInTheDocument();
  });
});