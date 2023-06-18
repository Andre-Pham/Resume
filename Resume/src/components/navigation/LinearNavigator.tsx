import { createStackNavigator } from "@react-navigation/stack";
import LeafStack from "./LeafStack";
import CustomLeafHeader from "./CustomHeader";
import StateManager from "../../state/publishers/StateManager";

interface Props {
    stack: LeafStack
}

export const LinearNavigator: React.FC<Props> = ({ stack }) => {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator>
            {
                stack.screens.map((screen, index) => {
                    return (
                        <Stack.Screen 
                            key={screen.id}
                            name={screen.id}
                            component={screen.component}
                            options={({ navigation }) => ({
                                ...screen.options,
                                cardStyle: { backgroundColor: StateManager.backgroundColor.read() },
                                header: () => (
                                    screen.title == null
                                        ?
                                    <></>
                                        :
                                    <CustomLeafHeader
                                        title={screen.title}
                                        canGoBack={index > 0}
                                        navigation={navigation}
                                    />
                                )
                            })}
                        />
                    );
                })
            }
        </Stack.Navigator>
    );
}