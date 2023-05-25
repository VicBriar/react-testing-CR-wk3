/** @jest-environment jsdom */
import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { App } from './App';

/**
 * Verify something should render
 */
describe('App Tests',() => {

  test('App should render', () => {
    render(<App />);
  
    expect(screen.getByText('Welcome, party people!')).toBeInTheDocument();
  });
  test('Button should render', () => {
    render(<App />);

    const button = screen.getByText(/Current Theme.*/i);
    
    expect(button).toBeInTheDocument();
  });
  
  /**
   * Verify clicking button should change theme
   * hint: use fireEvent.click(element) to trigger a click event on an element
   */
  test('theme button should update button text', () => {
    render(<App />)
    const button = screen.getByText(/Current theme: light/i);
    expect(button).toBeInTheDocument();

    fireEvent.click(button);
    expect(button.innerHTML).toBe("Current theme: dark");
  });
  
  // BONUS
  // hint: there is a `.toHaveStyle` method.
  // e.g.: expect(element).toHaveStyle('color: #FFF');
  test('theme button should toggle styles', () => {
    const app = render(<App />);
    expect(app.baseElement).toHaveStyle("background-color: rgb(255,255,255)")

    const button = screen.getByText(/Current Theme.*/i);
    fireEvent.click(button);

    //expect(app.baseElement).toHaveStyle("background-clor: #333");

  });
  
  /**
   * Verify clicking button should toggle hidden content
   *
   * hint: you can check if something does not exist by using .not
   * e.g. expect(element).not.toBeInTheDocument()
   *
   * hint: use `queryByText` instead of `getByText` to check if something is _not_ rendered
   * (getByText will throw an error if it is not rendered)
   */
  test('hidden button should toggle hidden content', () => {
    render(<App />)
    const button = screen.getByText(/show.*/i);
    
    expect(() => screen.getByText("this content is hidden by default")).toThrow();
    expect(button).toBeDefined;

    fireEvent.click(button);

    const text = screen.getByText("this content is hidden by default");
    expect(text).toBeDefined();
  });
  
  
  /**
   * Want more? Try these:
   *   - check for the presence of a specific element, like the paragraph containing the text "Click the button to toggle the theme"
   *   - check the for the class name .container on the surrounding div
   *   - after clicking the toggle hidden content button, check for the button text to update to "hide" instead of "show"
   */
  
})
