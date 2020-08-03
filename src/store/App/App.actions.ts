import { COLLAPSE_SIDENAV, TOGGLE_DOCK } from './App.types';

export const toggleDock = () => {
    return {
        type: TOGGLE_DOCK,
    };
};

export const collapseSidenav = (state: boolean) => {
    return {
        type: COLLAPSE_SIDENAV,
        collapsed: state,
    };
};
