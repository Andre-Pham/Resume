import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ResText from '../base/ResText/ResText';
import ResTypography from '../styling/ResTypography';
import StateManager from '../../state/publishers/StateManager';

type CustomLeafHeaderProps = {
    title: string;
    buttonProps: LeftButtonProps;
};

type LeftButtonProps = {
    canGoBack: boolean;
    navigation: any;
};

const CustomLeafHeader: React.FC<CustomLeafHeaderProps> = ({ title, buttonProps }) => {

    // Use a hook to define background color
    // Otherwise state updates won't redraw the component
    const [backgroundColor, setBackgroundColor] = React.useState<string>(StateManager.backgroundColor.read());

    const [headerTitle, setHeaderTitle] = React.useState<string>(title);

    StateManager.backgroundColor.subscribe(() => {
        setBackgroundColor(StateManager.backgroundColor.read());
    });

    return (
        <SafeAreaView 
            edges={['top']}
            style={[
            styles.safeAreaWrapper,
            { backgroundColor: backgroundColor },
            ]}
        >
            <View style={styles.header}>
                {
                    buttonProps.canGoBack 
                        ?
                    <TouchableOpacity 
                        onPress={buttonProps.navigation.goBack}
                        style={styles.backButton}    
                    >
                        <Icon name={"chevron-left"} size={45} colour={ResTypography.header.color} style={{ marginLeft: -10 }} />
                    </TouchableOpacity>
                        :
                    null
                }
                <ResText typography={ResTypography.header}>
                    {headerTitle}
                </ResText>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 22,
    paddingTop: 22,
  },
  safeAreaWrapper: {
    // None
  },
  titleWrapper: {
    flex: 1
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  backButton: {
    alignItems: 'center',
    paddingRight: 6,
  },
});

export default CustomLeafHeader;
