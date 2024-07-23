import React from "react";
import { render,screen } from "@testing-library/react";
import AvatarLetter from '../../src/layout/components/AvatarLetter';


describe('Testing in <AvatarLetter>',()=>{

    const first_name = 'Santiago';
    const last_name = 'Pradilla';

    test('Should match with the snapshot',()=>{
        const { container } = render(<AvatarLetter first_name={first_name} last_name={last_name}/>)
        expect( container ).toMatchSnapshot();
    })


    test('Should show first letter name and lastname',()=>{
        const lettersName = 'SP';
        render(<AvatarLetter first_name={first_name} last_name={last_name}/>)
        const name = screen.getByText(lettersName);
        expect( name ).toBeTruthy();
    })


})