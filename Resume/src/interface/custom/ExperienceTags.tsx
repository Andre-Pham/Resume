import { Experience } from "../../model/types/Experience";
import { ResChip } from "../components/ResChip";
import { ResText } from "../components/ResText";
import { HStack } from "../containers/stacks/HStack";
import { ResColorPresets } from "../styling/ResColorPresets";
import { ResDimensionPresets } from "../styling/ResDimensionPresets";
import { ResTypographyPresets } from "../styling/ResTypographyPresets";

interface Props {
    experience: Experience;
    style?: React.CSSProperties;
}

export const ExperienceTags: React.FC<Props> = ({ experience, style }) => {
    return (
        <HStack spacing={ResDimensionPresets.tagSpacing} style={style}>
            {experience.tags.map((tag) => (
                <ResChip color={ResColorPresets.chipBackground} key={tag}>
                    <ResText typography={ResTypographyPresets.chip}>{tag}</ResText>
                </ResChip>
            ))}
        </HStack>
    );
};
