import React, { useEffect, useState } from 'react';
import { Dimensions, StyleSheet, ViewStyle } from 'react-native';
import ResButton from '../base/ResButton/ResButton';
import StateManager from '../../state/publishers/StateManager';
import ResColors from '../styling/ResColors';
import { ActiveSection } from '../../state/publishers/types/ActiveSection';
import ResTypography from '../styling/ResTypography';
import Environment from '../../state/environment/Environment';
import { ResScreenOrientation } from '../../state/environment/types/ResScreenOrientation';
import VStack from '../containers/VStack';
import Header from './Header';
import SplashIntro from './SplashIntro';
import HStack from '../containers/HStack';
import SplashButton from './SplashButton';
import ResDimensions from '../styling/ResDimensions';

interface Props {
    // No props
}

const Splash: React.FC<Props> = ({ 
    // No props
}) => {
    const [screenIsPortrait, setScreenIsPortrait] = useState(Environment.instance.getScreenWidth() <= 950);

    useEffect(() => {
        Dimensions.addEventListener('change', (newDimensions) => {
            setScreenIsPortrait(Environment.instance.getScreenWidth() <= 950);
        });
    }, []);

    let verticalButtonSpacing = 32;
    let horizontalButtonSpacing = Math.sqrt(Math.pow(verticalButtonSpacing, 2) - Math.pow(verticalButtonSpacing/2, 2));

    const onLayout = (event: any) => {
        const layout = event.nativeEvent.layout;
        StateManager.contentWidth.publish(layout.width);
    }

    if (screenIsPortrait) {
        return (
            <VStack spacing={ResDimensions.mainScreenSpacing} onLayout={onLayout}>
                <SplashIntro style={{ flex: 1 }} />

                <HStack spacing={horizontalButtonSpacing} style={{ alignItems: 'center' }}>
                    <SplashButton 
                        label="experience"
                        section={ActiveSection.experience}
                    />

                    <SplashButton 
                        label="skills"
                        section={ActiveSection.skills}
                    />

                    <SplashButton 
                        label="education"
                        section={ActiveSection.education}
                    />
                </HStack> 
            </VStack>
        );
    } else {
        return (
            <HStack spacing={64} style={{ alignItems: 'flex-start' }} onLayout={onLayout}>
                <SplashIntro />

                <HStack spacing={horizontalButtonSpacing} style={{ alignItems: 'center' }}>
                    <VStack spacing={verticalButtonSpacing}>
                        <SplashButton 
                            label="experience"
                            section={ActiveSection.experience}
                        />

                        <SplashButton 
                            label="skills"
                            section={ActiveSection.skills}
                        />
                    </VStack>

                    <SplashButton 
                        label="education"
                        section={ActiveSection.education}
                    />
                </HStack>   
            </HStack>
        );
    }
}

export default Splash;