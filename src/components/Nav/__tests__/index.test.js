import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Nav from '..';

const categories = [
  { name: 'portraits', description: 'Portraits of people in my life' }
]
const mockCurrentCategory = jest.fn();
const mockSetCurrentCategory = jest.fn();
const mockContentSelected = jest.fn();
const mockSetContentSelected = jest.fn();

afterEach(cleanup);

describe('Nav component', () => {
  it('renders', () => {
    render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        contentSelected={mockContentSelected}
        setContentSelected={mockSetContentSelected}
      />
    );
  });

  it('matches snapshot', () => {
    const {asFragment} = render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        contentSelected={mockContentSelected}
        setContentSelected={mockSetContentSelected}
      />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe('Emoji is visible', () => {
  it('inserts emoji into h2', () => {
    const {getByLabelText} = render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        contentSelected={mockContentSelected}
        setContentSelected={mockSetContentSelected}
      />
    );

    expect(getByLabelText('camera')).toHaveTextContent('📸');
  });
});

describe('links are visible', () => {
  it('inserts text into links', () => {
    const {getByTestId} = render(
      <Nav
        categories={categories}
        setCurrentCategory={mockSetCurrentCategory}
        currentCategory={mockCurrentCategory}
        contentSelected={mockContentSelected}
        setContentSelected={mockSetContentSelected}
      />
    );

    expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
    expect(getByTestId('about')).toHaveTextContent('About me');
  });
});