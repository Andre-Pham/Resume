import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ResText from '../base/ResText/ResText';
import ResTypography from '../styling/ResTypography';
import StateManager from '../../state/publishers/StateManager';

interface Props {
    title: string;
    canGoBack: boolean;
    navigation: any;
}

const CustomLeafHeader: React.FC<Props> = ({ 
    title, 
    canGoBack, 
    navigation 
}) => {
    const [backgroundColor, setBackgroundColor] = React.useState<string>(StateManager.backgroundColor.read());

    StateManager.backgroundColor.subscribe(() => {
        setBackgroundColor(StateManager.backgroundColor.read());
    });

    return (
        <SafeAreaView 
            edges={['top']}
            style={{ backgroundColor: backgroundColor }}
        >
            <View 
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingHorizontal: 22,
                    paddingTop: 22,
                }}
            >
                {
                    canGoBack 
                        ?
                    <TouchableOpacity 
                        onPress={navigation.goBack}
                        style={{
                            alignItems: 'center',
                            paddingRight: 6,
                        }}    
                    >
                        <Icon 
                            name={"chevron-left"} 
                            size={45} 
                            colour={ResTypography.header.color} 
                            style={{ marginLeft: -10 }} 
                        />
                    </TouchableOpacity>
                        :
                    null
                }

                <ResText typography={ResTypography.header}>
                    {title}
                </ResText>
            </View>
        </SafeAreaView>
    )
};

export default CustomLeafHeader;
