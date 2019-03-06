import * as actionTypes from './actionTypes';

export const loadUserDetailsFromCach = () => {
    return {
        type: actionTypes.LOAD_USER_DETAILS_FROM_CACH
    }
};

export const setUserDetails = (name, gender, age) => {
    return {
        type: actionTypes.SET_USER_DETAILS,
        name,
        gender,
        age
    }
};

