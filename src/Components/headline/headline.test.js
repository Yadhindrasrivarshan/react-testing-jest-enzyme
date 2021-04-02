import React from 'react';
import {shallow} from 'enzyme'
import Headline from './index'
import { findByTestAtrr } from '../../../Utils';

// import checkPropTypes from 'check-prop-types'

const setUp=(props={})=>{
    const component=shallow(<Headline {...props}/>)
    return component
}
describe('Headline Component', () => {





    // describe('Checking PropTypes', () => {
    //    test('It should not throw a warning',()=>{
    //        const expectedProps={
    //            header:'Test Header',
    //            desc:'Test Desc',
    //            tempArr:[{
    //                fName:'Test fname',
    //                lName:'Test lname',
    //                email:'test@gmail.com',
    //                age:23,
    //                onlineStatus:false
    //            }]
    //        }

    //        const propsErr=checkPropTypes(Headline.propTypes,expectedProps,'props',Headline.name)
    //        expect(propsErr).toBeUndefined()
    //    })  
    // })
    
    
    describe('Have props', () => {
        let wrapper
        beforeEach(()=>{
             const props={
                 header:'Test Header',
                 desc:'Test Desc'
             }
             wrapper=setUp(props)
        })
        it('Should render without erros',()=>{
            const component=findByTestAtrr(wrapper,'HeadlineComponent')


            expect(component.length).toBe(1)
        })
        it('Should render a H1',()=>{
            const component=findByTestAtrr(wrapper,'header')

            expect(component.length).toBe(1)
        })
        it('Should render desc',()=>{
            const component=findByTestAtrr(wrapper,'desc')


            expect(component.length).toBe(1)
        })

    })

    describe('Have No props', () => {
        let wrapper
        beforeEach(()=>{
             wrapper=setUp()
        })
        it('Should not render',()=>{
            
            const component=findByTestAtrr(wrapper,'headerComponent')

            expect(component.length).toBe(0)
        })
        
    })
    
    
})
