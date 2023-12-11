import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Note from './Note';

describe('<Note />', () => {
  test('it should mount', () => {
    render(<Note />);
    
    const note = screen.getByTestId('Note');

    expect(note).toBeInTheDocument();
  });
});