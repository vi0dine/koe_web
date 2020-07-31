import { TOGGLE_DOCK } from './App.types';

const INITIAL_STATE = {
    dockOpened: false,
};

const appReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case TOGGLE_DOCK:
            return {
                ...state,
                dockOpened: !state.dockOpened,
            };
        default:
            return state;
    }
};

export default appReducer;
