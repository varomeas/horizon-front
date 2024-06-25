import React, { createContext, useState } from 'react';

export const FontSizeContext = createContext();

export const FontSizeProvider = ({ children }) => {
    const [fontSize, setFontSize] = useState('medium');

    const changeFontSize = (size) => {
        setFontSize(size);
    };

    return (
        <FontSizeContext.Provider value={{ fontSize, changeFontSize }}>
            {children}
        </FontSizeContext.Provider>
    );
};