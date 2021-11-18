import ACTION_TYPES from "../Actions/ACTION_TYPES";

const defaultState = {
    isFetching: false,
    error: {
        type: '',
        message: '',
        
    },
};

const reducer = (state = defaultState, action) => {
    const consol = console.log(state);
    switch (action.type){
        case ACTION_TYPES.SUCCESS: {
            return {state, isFetching: true, consol}
        }
        case ACTION_TYPES.RESET: {
            return {state: defaultState, consol}
        }
        default: return {state, consol}
    }
}


export default reducer;