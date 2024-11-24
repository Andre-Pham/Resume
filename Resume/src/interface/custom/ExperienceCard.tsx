import React from "react";
import { FlatContainer } from "../containers/styled/FlatContainer";
import { ResColorPresets } from "../styling/ResColorPresets";
import { ResText } from "../components/ResText";
import { ResTypographyPresets } from "../styling/ResTypographyPresets";
import { VStack } from "../containers/stacks/VStack";
import { ResDimensionPresets } from "../styling/ResDimensionPresets";
import { Experience } from "../../model/types/Experience";
import { HStack } from "../containers/stacks/HStack";
import { ResImage } from "../components/ResImage";
import { ExperienceTags } from "./ExperienceTags";
import { ExperienceDownloads } from "./ExperienceDownloads";
import { ExperienceAwsServiceCategories } from "./ExperienceAwsServiceCategories";
import { ExperienceInlineLinks } from "./ExperienceInlineLInks";
import { ExperienceLinks } from "./ExperienceLinks";

interface Props {
    experience: Experience;
    style?: React.CSSProperties;
}

export const ExperienceCard: React.FC<Props> = ({ experience, style }) => {
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

                <ExperienceInlineLinks experience={experience} />

                <ExperienceLinks experience={experience} />

                <ExperienceDownloads experience={experience} style={{ paddingTop: 4 }} />

                <ExperienceTags experience={experience} style={{ paddingTop: 4 }} />

                <ExperienceAwsServiceCategories experience={experience} />
            </VStack>
        </FlatContainer>
    );
};
