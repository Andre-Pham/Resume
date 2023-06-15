import React from 'react';
import ResText from '../base/ResText/ResText';
import HStack from '../containers/HStack';
import { View, ViewStyle } from 'react-native';
import ResTypography from '../styling/ResTypography';
import FlatContainer from '../containers/FlatContainer';
import ResColors from '../styling/ResColors';
import ResHyperlink from '../base/ResHyperlink/ResHyperlink';
import VStack from '../containers/VStack';
import ResChip from '../base/ResChip/ResChip';
import ResColor from '../styling/color/ResColor';
import Experience from '../../data/experience/Experience';
import ResDimensions from '../styling/ResDimensions';

interface Props {
    experience: Experience;
    style?: ViewStyle;
}

const ExperienceCard: React.FC<Props> = ({ 
    experience,
    style,
}) => {
    const renderLinks = () => {
        return experience.links.map((link) => (
            <ResText typography={ResTypography.body} key={link.url}>
                {link.label + ": "}

                <ResHyperlink
                    url={link.url}
                    typography={ResTypography.body}
                >
                    {link.shownURL}
                </ResHyperlink>
            </ResText>
        ));
    };

    const renderTags = () => {
        return experience.tags.map((tag) => (
            <ResChip
                color={ResColors.textDark}
                key={tag}
            >
                <ResText typography={ResTypography.chip}>
                    {tag}
                </ResText>
            </ResChip>
        ));
    }

    return (
        <FlatContainer
            color={ResColors.fillBackgroundLight}
            style={{ flex: 1, ...style }}
        >
            <ResText typography={ResTypography.header}>
                {experience.name}
            </ResText>

            <VStack spacing={ResDimensions.bodyParagraphSpacing}>
                <ResText typography={ResTypography.subscript}>
                    {experience.subscriptText}
                </ResText>

                <ResText typography={ResTypography.body}>
                    {experience.description}
                </ResText>

                {renderLinks()}

                <HStack spacing={ResDimensions.tagSpacing} style={{ paddingTop: 6 }}>
                    {renderTags()}
                </HStack>
            </VStack>
        </FlatContainer>
    );
}

export default ExperienceCard;