import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Search from './Search';

describe('Search component', () => {
  afterEach(() => cleanup());
  it('renders Search component', () => {
    const { asFragment } = render(<Search />);
    expect(asFragment()).toMatchSnapshot();
  });
});
