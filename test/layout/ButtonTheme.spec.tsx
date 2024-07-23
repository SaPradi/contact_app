import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../utils/test-utils';
import userEvent from '@testing-library/user-event';
import ButtonTheme from '../../src/layout/components/ButtonTheme';

describe('Testing in <ButtonTheme/> ',()=>{

    test('Should match with the snapshot', () => {
      
        const { container } = renderWithProviders(<ButtonTheme />);

        expect( container ).toMatchSnapshot();

    })


    test('should open the menutheme on button click', async() => {
    
        const { store } = renderWithProviders(<ButtonTheme />);
        
        const button = screen.getByLabelText(/toggle button theme/i);
        await userEvent.click(button);
      
        const state = store.getState();
        expect(state.menu.themeMenuVisible).toBe(true);

    });

})
