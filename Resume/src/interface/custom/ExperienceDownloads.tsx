import { mdiTrayArrowDown } from "@mdi/js";
import { Experience } from "../../model/types/Experience";
import { ResCompactButton } from "../components/ResCompactButton";
import { VStack } from "../containers/stacks/VStack";
import { ResDimensionPresets } from "../styling/ResDimensionPresets";
import { ResTypographyPresets } from "../styling/ResTypographyPresets";
import { ResColorPresets } from "../styling/ResColorPresets";
import { DownloadService } from "../../services/DownloadService";

interface Props {
    experience: Experience;
    style?: React.CSSProperties;
}

export const ExperienceDownloads: React.FC<Props> = ({ experience, style }) => {
    if (experience.files.length === 0) {
        return undefined;
    }
    return (
        <VStack spacing={ResDimensionPresets.tagSpacing} style={style}>
            {experience.files.map((file) => (
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
            ))}
        </VStack>
    );
};
