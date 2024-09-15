import React from "react";
import { FlatContainer } from "../containers/Styled/FlatContainer";
import { ResColors } from "../styling/ResColors";
import { ResText } from "../base/ResText";
import { ResTypography } from "../styling/ResTypography";
import { VStack } from "../containers/Stacks/VStack";
import { ResDimensions } from "../styling/ResDimensions";
import { Experience } from "../../model/experience/Experience";
import { ResHyperlink } from "../base/ResHyperlink";
import { ResCompactButton } from "../base/ResCompactButton";
import { mdiTrayArrowDown } from "@mdi/js";
import { DownloadService } from "../../services/DownloadService";
import { ResChip } from "../base/ResChip";
import { HStack } from "../containers/Stacks/HStack";
import { ResImage } from "../base/ResImage";

interface Props {
    experience: Experience;
    style?: React.CSSProperties;
}

export const ExperienceCard: React.FC<Props> = ({ experience, style }) => {
    const renderLinks = (): React.ReactNode => {
        return experience.links.map((link) => (
            <ResText typography={ResTypography.body} key={link.url}>
                {link.label + ": "}

                <ResHyperlink url={link.url} typography={ResTypography.body}>
                    {link.shownURL}
                </ResHyperlink>
            </ResText>
        ));
    };

    const renderDownloads = (): React.ReactNode => {
        return experience.files.map((file) => (
            <ResCompactButton
                key={file.fileName}
                label={file.label}
                iconPath={mdiTrayArrowDown}
                typography={ResTypography.buttonCompact.withColor(ResColors.textLightPersistent)}
                color={ResColors.accent}
                wide={false}
                onPress={() => {
                    // Fire-and-forget (discard boolean promise)
                    void DownloadService.inst.download(file);
                }}
                style={{ alignSelf: "flex-start" }}
            />
        ));
    };

    const renderTags = (): React.ReactNode => {
        return experience.tags.map((tag) => (
            <ResChip color={ResColors.chipBackground} key={tag}>
                <ResText typography={ResTypography.chip}>{tag}</ResText>
            </ResChip>
        ));
    };

    return (
        <FlatContainer color={ResColors.fillBackgroundLight} style={{ flex: 1, ...style }}>
            <HStack spacing={12} style={{ paddingBottom: 4 }}>
                {experience.image !== null ? (
                    <ResImage
                        height={34}
                        width={34}
                        fileName={experience.image}
                        scale="none"
                        style={{
                            borderRadius: 8,
                            alignSelf: "center",
                            border: `2px solid ${ResColors.textSemiDark.getColor()}`,
                        }}
                    />
                ) : undefined}

                <ResText typography={ResTypography.header} wide={false} numberOfLines={3}>
                    {experience.name}
                </ResText>
            </HStack>

            <VStack spacing={ResDimensions.bodyParagraphSpacing} style={{ paddingTop: 4 }}>
                <ResText typography={ResTypography.subscript}>{experience.subscriptText}</ResText>

                <ResText typography={ResTypography.body}>{experience.description}</ResText>

                {renderLinks()}

                {experience.files.length === 0 ? undefined : (
                    <VStack spacing={ResDimensions.tagSpacing} style={{ paddingTop: 6 }}>
                        {renderDownloads()}
                    </VStack>
                )}

                <HStack spacing={ResDimensions.tagSpacing} style={{ paddingTop: 6 }}>
                    {renderTags()}
                </HStack>
            </VStack>
        </FlatContainer>
    );
};
