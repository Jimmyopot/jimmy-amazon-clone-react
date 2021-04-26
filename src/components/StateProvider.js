import React, { createContext, useContext, useReducer } from 'react';

// set up data layer
// we need this to track the BASKET


// This is the DATA LAYER
export const StateContext = createContext();

// Build a PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => {
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        { children }
    </StateContext.Provider>
}