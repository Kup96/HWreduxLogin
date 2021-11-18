import ACTION_TYPES from './ACTION_TYPES';


export const authLogin = (data) => {
    return {
        type: ACTION_TYPES.SUCCESS,
        data: data,

    };
};

export const authClear = (data) => {
    return {
        type: ACTION_TYPES.RESET,
        data: data,
    };
};