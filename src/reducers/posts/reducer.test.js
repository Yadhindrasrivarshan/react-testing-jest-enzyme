import {types} from '../../actions/types'

import postsReducer from './reducer'
describe('Posts Reducer',()=>{
    test('Should return default state',()=>{
             const newState=postsReducer(undefined,{})

             expect(newState).toEqual([])
    })


    test('Should return a  new state',()=>{
        const posts=[{title:'Test 1'},{title:'Test 2'},{title:'Test 3'}]
        const newState=postsReducer(undefined,{
             type:types.GET_POST,
             payload:posts

        })
        expect(newState).toEqual(posts)

    })

})