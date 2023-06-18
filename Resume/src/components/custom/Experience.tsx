import React from 'react';
import ResText from '../base/ResText/ResText';
import HStack from '../containers/HStack';
import { View, ViewStyle } from 'react-native';
import ResTypography from '../styling/ResTypography';
import FlatContainer from '../containers/FlatContainer';
import ResColors from '../styling/ResColors';
import VStack from '../containers/VStack';
import ResDimensions from '../styling/ResDimensions';
import { ExperiencePeriods } from '../../data/experience/ExperiencePeriods';
import ExperienceSection from './ExperienceSection';

interface Props {
    style?: ViewStyle;
}

const Experience: React.FC<Props> = ({ 
    style,
}) => {
    return (
        <VStack spacing={ResDimensions.pageContentSpacing} style={{ ...style, }}>
            {
                ExperiencePeriods().map((period) => (
                    <ExperienceSection period={period} key={period.label} />
                ))
            }
        </VStack>
    );
}

export default Experience;