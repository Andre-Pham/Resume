import React, { createContext, useEffect, useMemo, useState } from "react";
import Environment from "../../state/environment/Environment";
import StateManager from "../../state/publishers/StateManager";

export const ColorSchemeContext = createContext(Environment.instance.getDeviceColorScheme());

interface Props {
    // Components to be embedded
    children: any;
}

export const ColorSchemeProvider: React.FC<Props> = ({ children }) => {
    const [colorScheme, setColorScheme] = useState(Environment.instance.getDeviceColorScheme());
    const value = useMemo(() => ({ colorScheme, setColorScheme }), [colorScheme]);

    useEffect(() => {
        StateManager.colorScheme.subscribe(() => {
            setColorScheme(StateManager.colorScheme.read());
        });
    }, []);

    return <ColorSchemeContext.Provider value={value.colorScheme}>{children}</ColorSchemeContext.Provider>;
};
