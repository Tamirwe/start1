import * as actionTypes from '../actions/actionTypes';

const initialState = {
    name: 'Johng',
    gender: 'female',
    age: 2
};

const loadUserDetailsFromCach = (state, action) => {
    const name = localStorage.getItem('name') ? localStorage.getItem('name') : initialState.name;
    const gender = localStorage.getItem('gender') ? localStorage.getItem('gender') : initialState.gender;
    const age = localStorage.getItem('age') ? localStorage.getItem('age') : initialState.age;

    return {
        ...state, ...{
            name: name,
            gender: gender,
            age: age
        }
    };
}

const setUserDetails = (state, action) => {
    localStorage.setItem('name', action.name);
    localStorage.setItem('gender', action.gender);
    localStorage.setItem('age', action.age);

    return {
        ...state, ...{
            name: action.name,
            gender: action.gender,
            age: action.age
        }
    };
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_USER_DETAILS_FROM_CACH: return loadUserDetailsFromCach(state, action);
        case actionTypes.SET_USER_DETAILS: return setUserDetails(state, action);

        default:
            return state;
    }
};

export default reducer;