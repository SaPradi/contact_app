import React from "react";
import { renderWithProviders } from "../utils/test-utils";
import MenuOptions from '../../src/layout/components/MenuOptions';
import { screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";


describe('Testing <MenuOptions/>', () => {

    const preloadedState = {
        menu: {
          dropdownMenuVisible: true,
          formMenuVisible:false,
          themeMenuVisible:null
        }
    };


    test('Should match with the snapshot', () => {

        const { container } = renderWithProviders(<MenuOptions />);

        expect(container).toMatchSnapshot();

    })


    test('dispatches toggleDropdownMenu action on close button click', async () => {
        const { store } = renderWithProviders(<MenuOptions />,{preloadedState});

        const closeButton = screen.getByLabelText(/close button menu/i);
        await userEvent.click(closeButton);

        const state = store.getState();
        expect(state.menu.dropdownMenuVisible).toBe(false);
    });


    test('dispatches toggleFormMenu and toggleDropdownMenu actions on new contact button click', async () => {
        const { store } = renderWithProviders(<MenuOptions />,{preloadedState});

        const newContactButton = screen.getByLabelText(/new contact button/i);
        await userEvent.click(newContactButton);

        const state = store.getState();
        // 
        expect(state.menu.dropdownMenuVisible).toBe(false);
        expect(state.menu.formMenuVisible).toBe(true);
    });


})
