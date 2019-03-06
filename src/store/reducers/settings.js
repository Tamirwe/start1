import * as actionTypes from '../actions/actionTypes';

const initialState = {
    width: '400',
    height: '400',
    color: '#433F81',
    colorRGB: {
        r: '241',
        g: '112',
        b: '19',
        a: '1',
    },
    speed: 12
};

const loadSettingsFromCach = (state, action) => {
    const width = localStorage.getItem('width') ? localStorage.getItem('width') : initialState.width;
    const height = localStorage.getItem('height') ? localStorage.getItem('height') : initialState.height;
    const color = localStorage.getItem('color') ? localStorage.getItem('color') : initialState.color;

    let colorRGB;
    if (localStorage.getItem('colorRGB')) {
        try {
            colorRGB = JSON.parse(localStorage.getItem('colorRGB'))
        } catch (e) {
            colorRGB = initialState.colorRGB;
        }
    }
    else {
        colorRGB = initialState.colorRGB;
    }
    const speed = localStorage.getItem('speed') ? localStorage.getItem('speed') : initialState.speed;

    return {
        ...state, ...{
            width,
            height,
            color,
            colorRGB,
            speed
        }
    };
}

const setSettings = (state, action) => {
    localStorage.setItem('width', action.width);
    localStorage.setItem('height', action.height);
    localStorage.setItem('color', action.color);
    localStorage.setItem('colorRGB', JSON.stringify(action.colorRGB));
    localStorage.setItem('speed', action.speed);

    return {
        ...state, ...{
            width: action.width,
            height: action.height,
            color: action.color,
            colorRGB: action.colorRGB,
            speed: action.speed
        }
    };
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_SETTINGS_FROM_CACH: return loadSettingsFromCach(state, action);
        case actionTypes.SET_SETTINGS: return setSettings(state, action);

        default:
            return state;
    }
};

export default reducer;