import { COLLAPSE_SIDENAV, TOGGLE_DOCK } from './App.types';

const INITIAL_STATE = {
    dockOpened: false,
    sidenavCollapsed: false,
};

const appReducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
        case TOGGLE_DOCK:
            return {
                ...state,
                dockOpened: !state.dockOpened,
            };
        case COLLAPSE_SIDENAV:
            return {
                ...state,
                sidenavCollapsed: action.collapsed,
            };
        default:
            return state;
    }
};

export default appReducer;
