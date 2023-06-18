import React from 'react';
import { ViewStyle } from 'react-native';
import Experience from '../../data/experience/Experience';
import ResSmallButton from '../base/ResButton/ResSmallButton';
import ResChip from '../base/ResChip/ResChip';
import ResHyperlink from '../base/ResHyperlink/ResHyperlink';
import ResText from '../base/ResText/ResText';
import FlatContainer from '../containers/FlatContainer';
import HStack from '../containers/HStack';
import VStack from '../containers/VStack';
import ResColors from '../styling/ResColors';
import ResDimensions from '../styling/ResDimensions';
import ResTypography from '../styling/ResTypography';

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

    const renderDownloads = () => {
        return experience.files.map((file) => (
            <ResSmallButton 
                key={file.fileName}
                label={file.label}
                typography={ResTypography.buttonSmall}
                color={ResColors.accent}
                wide={false}
                onPress={() => {
                    const fileUrl = require('/assets/files/' + file.fileName);
                    try {
                        // Assume we're on web
                        const link = document.createElement('a');
                        link.href = fileUrl;
                        link.download = file.fileName; // Replace with the desired file name and extension
                        link.click();
                    } catch (error) {
                        console.error('File download failed:', error);
                    }
                }}
                style={{ alignSelf: 'flex-start' }}
            />
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

            <VStack spacing={ResDimensions.bodyParagraphSpacing} style={{ paddingTop: 4 }}>
                <ResText typography={ResTypography.subscript}>
                    {experience.subscriptText}
                </ResText>

                <ResText typography={ResTypography.body}>
                    {experience.description}
                </ResText>

                {renderLinks()}

                {
                    experience.files.length == 0
                        ?
                    <></>
                        :
                     <HStack spacing={ResDimensions.tagSpacing} style={{ paddingTop: 6 }}>
                        {renderDownloads()}
                    </HStack>
                }

                <HStack spacing={ResDimensions.tagSpacing} style={{ paddingTop: 6 }}>
                    {renderTags()}
                </HStack>
            </VStack>
        </FlatContainer>
    );
}

export default ExperienceCard;