import React from "react";
import { render,screen} from "@testing-library/react";
import TitleHeader from '../../src/layout/components/TitleHeader';


describe('Testing in <TitleHeader>',()=>{

    const title = 'Contact'


    test('Should match with the snapshot', () => {
      
        const {container} = render( <TitleHeader title={title} />)

        expect( container ).toMatchSnapshot();

    })
    


    test('Should show a prop title', () => {


        render( <TitleHeader title={title} /> )

        const propsTitle = screen.getByRole('heading',{level:1});
        expect(propsTitle.textContent).toBe(title);

    })
    

})