import store,{increment,decrement} from '../../src/redux/counter';
import React from 'react';
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react';
import MainPage from '../../src/pages/MainPage';
import { BrowserRouter } from 'react-router-dom';
  

describe('MainPage testcase', () => {
    it('should display heading in the screen', () => {
        render(
            <BrowserRouter>
                <MainPage />
            </BrowserRouter>
        )
        const desiredText = screen.getByText("Hello from DoSelect")
        expect(desiredText).toBeVisible();
    })

    it('shoud route to another-page', () => {
        render(
            <BrowserRouter>
                <MainPage />
            </BrowserRouter>
        )
        const anotherPageLink = screen.getByText("Learn More");
        fireEvent.click(anotherPageLink);
        console.log('path: ', window.location.pathname);
        expect(window.location.pathname).toBe(`${BASE_PATH}another-page`)
    })
})

  describe('counter reducer', () => {
    const initialState = {
      value: 3,
      status: 'idle'
    }
    it('should handle initial state', () => {
      expect(store(undefined, { type: 'unknown' })).toEqual({
        value: 0,
        status: 'idle'
      })
    })
  
    it('should handle increment', () => {
      const actual = store(initialState, increment())
      expect(actual.value).toEqual(4)
    })
  
    it('should handle decrement', () => {
      const actual = store(initialState, decrement())
      expect(actual.value).toEqual(2)
    })
  
  })
  