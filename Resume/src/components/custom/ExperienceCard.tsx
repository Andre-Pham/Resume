import React from 'react';
import ResText from '../base/ResText/ResText';
import HStack from '../containers/HStack';
import { View } from 'react-native';
import ResTypography from '../styling/ResTypography';
import FlatContainer from '../containers/FlatContainer';
import ResColors from '../styling/ResColors';
import ResHyperlink from '../base/ResHyperlink/ResHyperlink';
import VStack from '../containers/VStack';
import ResChip from '../base/ResChip/ResChip';
import ResColor from '../styling/color/ResColor';
import Experience from '../../data/experience/Experience';

interface Props {
    experience: Experience;
}

const ExperienceCard: React.FC<Props> = ({ 
    experience,
}) => {
    let italicBody = ResTypography.body;
    italicBody.italic = true;

    const renderLinks = () => {
        return experience.links.map((link) => (
            <ResText typography={ResTypography.body}>
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
            style={{ flex: 1 }}
        >
            <ResText typography={ResTypography.header}>
                {experience.name}
            </ResText>

            <VStack spacing={10}>
                <ResText typography={ResTypography.body}>
                    {experience.subscriptText}
                </ResText>

                <ResText typography={ResTypography.body}>
                    {experience.description}
                </ResText>

                {renderLinks()}

                <HStack spacing={10} style={{ paddingTop: 6 }}>
                    {renderTags()}
                </HStack>
            </VStack>
        </FlatContainer>
    );
}

export default ExperienceCard;