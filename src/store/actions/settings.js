import * as actionTypes from './actionTypes';

export const loadSettingsFromCach = () => {
    return {
        type: actionTypes.LOAD_SETTINGS_FROM_CACH
    }
};

export const setSettings = (width, height, color, colorRGB, speed) => {
    return {
        type: actionTypes.SET_SETTINGS,
        width,
        height,
        color,
        colorRGB,
        speed
    }
};

