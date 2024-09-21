import React from "react";
import { FlatContainer } from "../containers/styled/FlatContainer";
import { ResColorPresets } from "../styling/ResColorPresets";
import { ResText } from "../components/ResText";
import { ResTypographyPresets } from "../styling/ResTypographyPresets";
import { VStack } from "../containers/stacks/VStack";
import { ResDimensionPresets } from "../styling/ResDimensionPresets";
import { Experience } from "../../model/experience/Experience";
import { ResHyperlink } from "../components/ResHyperlink";
import { ResCompactButton } from "../components/ResCompactButton";
import { mdiTrayArrowDown } from "@mdi/js";
import { DownloadService } from "../../services/DownloadService";
import { ResChip } from "../components/ResChip";
import { HStack } from "../containers/stacks/HStack";
import { ResImage } from "../components/ResImage";

interface Props {
    experience: Experience;
    style?: React.CSSProperties;
}

export const ExperienceCard: React.FC<Props> = ({ experience, style }) => {
    const renderLinks = (): React.ReactNode => {
        return experience.links.map((link) => (
            <ResText typography={ResTypographyPresets.body} key={link.url}>
                {link.label + ": "}

                <ResHyperlink url={link.url} typography={ResTypographyPresets.body}>
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
                typography={ResTypographyPresets.buttonCompact.withColor(ResColorPresets.textLightPersistent)}
                color={ResColorPresets.accent}
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
            <ResChip color={ResColorPresets.chipBackground} key={tag}>
                <ResText typography={ResTypographyPresets.chip}>{tag}</ResText>
            </ResChip>
        ));
    };

    return (
        <FlatContainer color={ResColorPresets.fillBackgroundLight} style={{ flex: 1, ...style }}>
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
                            border: `2px solid ${ResColorPresets.textSemiDark.getColor()}`,
                        }}
                    />
                ) : undefined}

                <ResText typography={ResTypographyPresets.header} wide={false} numberOfLines={3}>
                    {experience.name}
                </ResText>
            </HStack>

            <VStack spacing={ResDimensionPresets.bodyParagraphSpacing} style={{ paddingTop: 4 }}>
                <ResText typography={ResTypographyPresets.subscript}>{experience.subscriptText}</ResText>

                <ResText typography={ResTypographyPresets.body}>{experience.description}</ResText>

                {renderLinks()}

                {experience.files.length === 0 ? undefined : (
                    <VStack spacing={ResDimensionPresets.tagSpacing} style={{ paddingTop: 6 }}>
                        {renderDownloads()}
                    </VStack>
                )}

                <HStack spacing={ResDimensionPresets.tagSpacing} style={{ paddingTop: 6 }}>
                    {renderTags()}
                </HStack>
            </VStack>
        </FlatContainer>
    );
};
