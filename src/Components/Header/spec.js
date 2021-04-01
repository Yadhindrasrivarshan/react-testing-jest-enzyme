import React from 'react';

import {shallow} from 'enzyme'

import Header from './index'

//test or it can be used

//first test

describe('Header Componen',()=>{

    test('It should render without errors',()=>{
         const component =shallow(<Header/>)
        console.log(component.debug());
        const wrapper=component.find('.headerComponent')
        
        expect(wrapper.length).toBe(1)
        

    })
})