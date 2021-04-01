import React from 'react';

import {shallow} from 'enzyme'

import Header from './index'
import {findByTestAtrr} from '../../../Utils'
//test or it can be used

const setUp=(props={})=>{
    const component=shallow(<Header {...props}/>)
    return component
}



describe('Header Componen',()=>{
    //Test 1
    let component 


    beforeEach(()=>{  //Runs a function before each of the tests in this file runs. If the function returns a promise, Jest waits for that promise to resolve before running the test.
        component=setUp()
    })
    test('It should render without errors',()=>{
        
        const wrapper=findByTestAtrr(component,'headerComponent')
        console.log(wrapper.debug());
        expect(wrapper.length).toBe(1)
        

    })

    //Test 2

    it('Should render a  logo',()=>{
      
        const logo=findByTestAtrr(component,'logoIMG')
        
        expect(logo.length).toBe(1)

    })


})