import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CustomLeafHeader from "./CustomHeader";
import LeafStack from "./LeafStack";

/**
 * Render a react native native stack with the screens you include in the leafstack
 * @param leafStack the stack you want to render
 * @returns a React Native Native Stack
 */
function renderNativeStack(leafStack: LeafStack, hasSidebar: boolean) {
    
    const Stack = createStackNavigator();

    // these options must apply to all screens in our application
    const globalOptions = {

    }

    return (
        <Stack.Navigator>
            {
                leafStack.screens.map((screen, index) => {
                    if (!hasSidebar || index >= 1){
                        return (
                            <Stack.Screen 
                                key={screen.id}
                                name={screen.id}
                                component={screen.component}
                                options={({ navigation }) => ({
                                    ...screen.options,
                                    ...globalOptions,
                                    header: () => (
                                        <CustomLeafHeader
                                            title={screen.title}
                                            canGoBack={index > 0}
                                            navigation={navigation}
                                        />
                                )})}
                            />
                        )
                    }
                })
            }
        </Stack.Navigator>
    )
}

/**
 * This wrapper takes our stack object and returns a react component that does not take in any props, then uses the leafStack object to render a native stack
 * This is required as the navigation components (tabbar, drawer, etc) require components, not already rendered JSX elements
 * In the wrapper we also check, if we have a sidebar, if we need to render the stack or empty screen next to the sidebar
 * @param leafStack the stack to you want to convert to a component
 * @returns A react stack component
 */
export const StackWrapper = (leafStack: LeafStack): React.FC => {
    
    const NativeStack: React.FC = () => {
        return renderNativeStack(leafStack, false);
    };
    
    return NativeStack;
}