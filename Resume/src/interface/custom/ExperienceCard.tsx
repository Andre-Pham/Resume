import React, { useState } from "react";
import { FlatContainer } from "../containers/styled/FlatContainer";
import { ResColorPresets } from "../styling/ResColorPresets";
import { ResText } from "../components/ResText";
import { ResTypographyPresets } from "../styling/ResTypographyPresets";
import { VStack } from "../containers/stacks/VStack";
import { ResDimensionPresets } from "../styling/ResDimensionPresets";
import { Experience } from "../../model/types/Experience";
import { ResHyperlink } from "../components/ResHyperlink";
import { ResCompactButton } from "../components/ResCompactButton";
import { mdiOpenInNew, mdiTrayArrowDown } from "@mdi/js";
import { DownloadService } from "../../services/DownloadService";
import { ResChip } from "../components/ResChip";
import { HStack } from "../containers/stacks/HStack";
import { ResImage } from "../components/ResImage";
import { ResIconButton } from "../components/ResIconButton";

interface Props {
    experience: Experience;
    style?: React.CSSProperties;
}

export const ExperienceCard: React.FC<Props> = ({ experience, style }) => {
    const renderInlineLinks = (): React.ReactNode => {
        return experience.inlineLinks?.map((link) => (
            <ResHyperlink url={link.url} key={link.url} typography={ResTypographyPresets.body}>
                {link.text}
            </ResHyperlink>
        ));
    };

    const renderLinks = (): React.ReactNode => {
        return experience.links.map((link) => (
            <ResText typography={ResTypographyPresets.body} key={link.url}>
                {link.label + ": "}

                <ResHyperlink url={link.url} typography={ResTypographyPresets.body}>
                    {link.shownURL.toLowerCase()}
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

    const renderAwsTags = (): React.ReactNode => {
        const [awsTagsExpanded, setAwsTagsExpanded] = useState(false);
        const awsTagsCutoff = 4;
        const awsTagsLength = experience.awsServicesCategories?.length ?? 0;
        const expandAwsTagsVisible = awsTagsLength > awsTagsCutoff;
        const sliceEnd = awsTagsLength === awsTagsCutoff ? awsTagsCutoff : awsTagsCutoff - 1;
        return (
            <>
                {experience.awsServicesCategories?.slice(0, awsTagsExpanded ? undefined : sliceEnd).map((tag) => (
                    <ResChip color={ResColorPresets.chipBackground} key={tag}>
                        <ResText typography={ResTypographyPresets.chip}>{tag}</ResText>
                    </ResChip>
                ))}

                {expandAwsTagsVisible ? (
                    <ResChip
                        color={ResColorPresets.accent}
                        onPress={() => {
                            setAwsTagsExpanded((before) => !before);
                        }}
                    >
                        <ResText typography={ResTypographyPresets.chip}>
                            {awsTagsExpanded ? "Show Less" : "Show More"}
                        </ResText>
                    </ResChip>
                ) : undefined}
            </>
        );
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
                            border: `2px solid ${ResColorPresets.textSemiDark.hexString}`,
                        }}
                    />
                ) : undefined}

                <ResText typography={ResTypographyPresets.header} wide={false} numberOfLines={3}>
                    {experience.name}
                </ResText>
            </HStack>

            <VStack spacing={ResDimensionPresets.bodyParagraphSpacing} style={{ paddingTop: 4 }}>
                <ResText typography={ResTypographyPresets.subscript}>{experience.subscriptText}</ResText>

                {experience.description.split("\n").map((paragraph, index) => (
                    <ResText key={index} typography={ResTypographyPresets.body}>
                        {paragraph}
                    </ResText>
                ))}

                {renderInlineLinks()}

                {renderLinks()}

                {experience.files.length === 0 ? undefined : (
                    <VStack spacing={ResDimensionPresets.tagSpacing} style={{ paddingTop: 6 }}>
                        {renderDownloads()}
                    </VStack>
                )}

                <HStack spacing={ResDimensionPresets.tagSpacing} style={{ paddingTop: 6 }}>
                    {renderTags()}
                </HStack>

                {experience.awsServicesCategories ? (
                    <>
                        <HStack spacing={8} style={{ alignItems: "center" }}>
                            <ResText typography={ResTypographyPresets.subscript} wide={false}>
                                {"AWS Service Categories"}
                            </ResText>

                            <ResIconButton
                                iconColor={ResColorPresets.textSemiDark}
                                iconPath={mdiOpenInNew}
                                size={24}
                                onlyIcon
                                onPress={() => {
                                    window.open(
                                        "https://docs.aws.amazon.com/whitepapers/latest/aws-overview/amazon-web-services-cloud-platform.html",
                                        "_blank",
                                    );
                                }}
                            />
                        </HStack>

                        <HStack spacing={ResDimensionPresets.tagSpacing}>{renderAwsTags()}</HStack>
                    </>
                ) : undefined}
            </VStack>
        </FlatContainer>
    );
};
