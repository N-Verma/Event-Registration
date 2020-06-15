//import {combineReducers} from 'redux';
const ADD_FORM = 'Add_Form';

function formApp(state=[],action){
    switch(action.type){
        case ADD_FORM:
            return [
                ...state,
                {
                    id:action.registerId,
                    name:action.fullName,
                    email:action.email,
                    mobile:action.mobile,
                    type:action.registerType
                }
            ]
    }
}


export default formApp;