import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import Environment from '../../state/environment/Environment';
import StateManager from '../../state/publishers/StateManager';
import { ActiveSection } from '../../state/publishers/types/ActiveSection';
import HStack from '../containers/HStack';
import VStack from '../containers/VStack';
import ResDimensions from '../styling/ResDimensions';
import SplashButton from './SplashButton';
import SplashButtonMobile from './SplashButtonMobile';
import SplashIntro from './SplashIntro';

interface Props {
    // No props
}

const Splash: React.FC<Props> = ({ 
    // No props
}) => {
    const [screenIsPortrait, setScreenIsPortrait] = useState(Environment.instance.screenIsPortrait());

    useEffect(() => {
        Dimensions.addEventListener('change', (newDimensions) => {
            setScreenIsPortrait(Environment.instance.screenIsPortrait());
        });
    }, []);

    let verticalButtonSpacing = 32;
    let horizontalButtonSpacing = Math.sqrt(Math.pow(verticalButtonSpacing, 2) - Math.pow(verticalButtonSpacing/2, 2));

    const onLayout = (event: any) => {
        const layout = event.nativeEvent.layout;
        if (layout.width > 0) {
            // Only if this component is visible
            StateManager.contentWidth.publish(layout.width);
        }
    }

    if (screenIsPortrait) {
        return (
            <VStack spacing={ResDimensions.mainScreenSpacing} onLayout={onLayout}>
                <SplashIntro style={{ flex: 1 }} />
                
                <VStack spacing={12}>
                    <SplashButtonMobile
                        label="experience"
                        section={ActiveSection.experience}
                    />

                    <SplashButtonMobile
                        label="skills"
                        section={ActiveSection.skills}
                    />

                    <SplashButtonMobile
                        label="education"
                        section={ActiveSection.education}
                    />
                </VStack> 
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