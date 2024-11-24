import React, { useState } from "react";
import { ResColorPresets } from "../styling/ResColorPresets";
import { ResText } from "../components/ResText";
import { ResTypographyPresets } from "../styling/ResTypographyPresets";
import { VStack } from "../containers/stacks/VStack";
import { ResDimensionPresets } from "../styling/ResDimensionPresets";
import { Experience } from "../../model/types/Experience";
import { HStack } from "../containers/stacks/HStack";
import { ResImage } from "../components/ResImage";
import { GridContainer } from "../containers/grid/GridContainer";
import { ResFontWeight } from "../styling/typography/ResFontWeight";
import { ResLinkButton } from "../components/ResLinkButton";
import { ExperienceTags } from "./ExperienceTags";
import { ExperienceDownloads } from "./ExperienceDownloads";
import { ExperienceAwsServiceCategories } from "./ExperienceAwsServiceCategories";
import { ExperienceInlineLinks } from "./ExperienceInlineLInks";
import { ExperienceLinks } from "./ExperienceLinks";

interface Props {
    experience: Experience;
    style?: React.CSSProperties;
}

export const CareerProject: React.FC<Props> = ({ experience, style }) => {
    const [isExpanded, setIsExpanded] = useState(false);

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

                        <ExperienceInlineLinks experience={experience} />

                        <ExperienceLinks experience={experience} />

                        <ExperienceDownloads experience={experience} style={{ paddingTop: 4 }} />

                        <ExperienceTags experience={experience} style={{ paddingTop: 4 }} />

                        <ExperienceAwsServiceCategories experience={experience} />
                    </VStack>
                </GridContainer>
            ) : undefined}
        </VStack>
    );
};
