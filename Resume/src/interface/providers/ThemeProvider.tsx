import React, { createContext, useState, useEffect, useMemo } from "react";
import { StateManager } from "../../state/publishers/StateManager";
import { ResColorPresets } from "../styling/ResColorPresets";
import { LocalStorageService } from "../../services/LocalStorageService";
import { createGlobalStyle } from "styled-components";
import { ColorScheme } from "../../state/publishers/types/ColorScheme";

const ColorThemeContext = createContext(StateManager.colorScheme.read());

interface Props {
    children: React.ReactNode;
}

export const ColorThemeProvider: React.FC<Props> = ({ children }) => {
    const [colorScheme, setColorScheme] = useState(StateManager.colorScheme.read());
    const value = useMemo(() => ({ colorScheme, setColorScheme }), [colorScheme]);

    useEffect(() => {
        const unsubscribe = StateManager.colorScheme.subscribe(() => {
            setColorScheme(StateManager.colorScheme.read());
        });

        return () => {
            unsubscribe();
        };
    }, []);

    useEffect(() => {
        document.body.style.backgroundColor = ResColorPresets.background.hexString;
        LocalStorageService.inst.writeColorTheme(colorScheme);
    }, [colorScheme]);

    return (
        <ColorThemeContext.Provider value={value.colorScheme}>
            <GlobalStyle colorScheme={colorScheme} />
            {children}
        </ColorThemeContext.Provider>
    );
};

// Color scheme still has to be passed in to react
const GlobalStyle = createGlobalStyle<{ colorScheme: ColorScheme }>`
    body {
        scrollbar-color: ${() => `${ResColorPresets.scrollBar.hexString} ${ResColorPresets.fillBackgroundLight.hexString}`};
        transition: background-color 0.2s ease, color 0.2s ease;
    }

    ::-webkit-scrollbar {
        width: 12px;
    }

    ::-webkit-scrollbar-thumb {
        background-color: ${() => ResColorPresets.scrollBar.hexString};
        border-radius: 0px;
    }

    ::-webkit-scrollbar-thumb:hover {
        background-color: ${() => ResColorPresets.scrollBar.hexString};
        border-radius: 0px;
        
    }

    ::-webkit-scrollbar-track {
        background-color: ${() => ResColorPresets.fillBackgroundLight.hexString};
        border-radius: 0px;
    }
`;
