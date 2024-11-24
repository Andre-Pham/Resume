import { useState } from "react";
import { Experience } from "../../model/types/Experience";
import { ResChip } from "../components/ResChip";
import { ResText } from "../components/ResText";
import { ResColorPresets } from "../styling/ResColorPresets";
import { ResTypographyPresets } from "../styling/ResTypographyPresets";
import { HStack } from "../containers/stacks/HStack";
import { ResDimensionPresets } from "../styling/ResDimensionPresets";

interface Props {
    experience: Experience;
    style?: React.CSSProperties;
}

export const ExperienceAwsTags: React.FC<Props> = ({ experience, style }) => {
    const [awsTagsExpanded, setAwsTagsExpanded] = useState(false);
    const awsTagsCutoff = 4;
    const awsTagsLength = experience.awsServicesCategories?.length ?? 0;
    const expandAwsTagsVisible = awsTagsLength > awsTagsCutoff;
    const sliceEnd = awsTagsLength === awsTagsCutoff ? awsTagsCutoff : awsTagsCutoff - 1;
    return (
        <HStack spacing={ResDimensionPresets.tagSpacing} style={style}>
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
        </HStack>
    );
};
