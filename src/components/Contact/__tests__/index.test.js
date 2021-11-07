import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Contact from '..';

afterEach(cleanup);

describe('Contact component', () => {
  it('renders', () => {
    render(<Contact/>);
  });

  it('matches snapshot', () => {
    const { asFragment } = render(<Contact/>);

    expect(asFragment()).toMatchSnapshot();
  });
});

describe('h1 tag visible', () => {
  it('inserts text into h1', () => {
    const { getByTestId } = render(<Contact/>);

    expect(getByTestId('h1tag')).toHaveTextContent('Contact me');
  });
});

describe('button visible', () => {
  it('inserts text into button', () => {
    const { getByTestId } = render(<Contact/>);

    expect(getByTestId('submit')).toHaveTextContent('Submit');
  });
});