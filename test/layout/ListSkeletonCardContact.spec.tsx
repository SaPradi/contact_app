import React from 'react';
import ListSkeletonCardContact from '../../src/layout/components/ListSkeletonCardContact';
import { render } from '@testing-library/react';

describe('Testing in <ListSkeletonCardContact/>', () => {
  

    test('Should match with the snapshot',()=>{
        const { container } = render(<ListSkeletonCardContact />);
        expect( container ).toMatchSnapshot();
    });

    test('Should show 4 skeleton card elements',()=>{    
        const { getAllByTestId } = render(<ListSkeletonCardContact/>)
        const elements = getAllByTestId('card-skeleton')
        expect( elements.length ).toBe(4) 
    });

})
