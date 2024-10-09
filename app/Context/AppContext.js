'use client'
import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [pageLoader, setPageLoader] = useState(true);

    return (
        <AppContext.Provider value={{isLoading, setIsLoading, pageLoader, setPageLoader}}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};
