import React, { useState } from "react";
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
import { GridContainer } from "../containers/grid/GridContainer";
import { ResFontWeight } from "../styling/typography/ResFontWeight";
import { ResLinkButton } from "../components/ResLinkButton";

interface Props {
    experience: Experience;
    style?: React.CSSProperties;
}

export const CareerProject: React.FC<Props> = ({ experience, style }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [awsTagsExpanded, setAwsTagsExpanded] = useState(false);

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
        <VStack spacing={12} style={style}>
            <HStack spacing={12} style={{ alignItems: "center" }}>
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

                <VStack spacing={2}>
                    <ResText typography={ResTypographyPresets.body.withWeight(ResFontWeight.bold)}>
                        {experience.name}
                    </ResText>

                    <ResLinkButton
                        typography={ResTypographyPresets.subscriptLabel}
                        label={isExpanded ? "Show Less" : "Show More"}
                        onPress={() => {
                            setIsExpanded((before) => !before);
                        }}
                    />
                </VStack>
            </HStack>

            {isExpanded ? (
                <GridContainer columns={2} spacing={12} columnSizeRule="min-content auto">
                    <div
                        style={{
                            width: 2,
                            height: "100%",
                            backgroundColor: ResColorPresets.textSemiDark.hexString,
                            borderRadius: 1,
                        }}
                    />

                    <VStack spacing={ResDimensionPresets.bodyParagraphSpacing}>
                        {experience.description.split("\n").map((paragraph, index) => (
                            <ResText key={index} typography={ResTypographyPresets.body}>
                                {paragraph}
                            </ResText>
                        ))}

                        {renderInlineLinks()}

                        {renderLinks()}

                        {experience.files.length === 0 ? undefined : (
                            <VStack spacing={ResDimensionPresets.tagSpacing} style={{ paddingTop: 4 }}>
                                {renderDownloads()}
                            </VStack>
                        )}

                        <HStack spacing={ResDimensionPresets.tagSpacing} style={{ paddingTop: 4 }}>
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
                </GridContainer>
            ) : undefined}
        </VStack>
    );
};
