import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import AnotherPage from '../../src/pages/AnotherPage';
import { BrowserRouter } from 'react-router-dom';

describe('AnotherPage text display', () => {
    it('should display heading in the screen', () => {
        render(
            <BrowserRouter>
                <AnotherPage />
            </BrowserRouter>
        )
        const desiredText = screen.getByText("Home Page")
        expect(desiredText).toBeVisible();
    })
})