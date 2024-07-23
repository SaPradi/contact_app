import React from "react";
import { renderWithProviders } from "../utils/test-utils";
import Modal from '../../src/layout/components/Modal';
import { screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event";

describe('Testing in <Modal/>', () => {
    const preloadedState = {
        modal: {
          isOpen: true,
        },
      };

    test('Should math with the snapshot', () => {

        const { container } = renderWithProviders(
            <Modal renderContent={ ()=> <div> Cualquier texto </div>} /> ,
            { preloadedState }
        );

        expect(container).toMatchSnapshot();

    })
    

    test('Should render the modal when isOpen is true', () => {
        const { getByText } = renderWithProviders(
            <Modal renderContent={ ()=> <div>Cualquier texto</div>} /> ,
            { preloadedState }
        );

        const element = getByText('Cualquier texto')
        expect(element.textContent).toBe('Cualquier texto');
    })


    test('Should close the modal when the close button is clicked', async() => {
        const { store } = renderWithProviders(<Modal renderContent={() => <div>Content</div>} />, { preloadedState });

        const closeButton = screen.getByRole('button');
        await userEvent.click(closeButton);
        const state = store.getState();
        expect(state.modal.isOpen).toBe(false);

    })
    

})
