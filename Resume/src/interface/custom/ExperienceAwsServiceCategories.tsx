import { mdiOpenInNew } from "@mdi/js";
import { Experience } from "../../model/types/Experience";
import { ResText } from "../components/ResText";
import { HStack } from "../containers/stacks/HStack";
import { ResTypographyPresets } from "../styling/ResTypographyPresets";
import { ResIconButton } from "../components/ResIconButton";
import { ResColorPresets } from "../styling/ResColorPresets";
import { ExperienceAwsTags } from "./ExperienceAwsTags";

interface Props {
    experience: Experience;
}

export const ExperienceAwsServiceCategories: React.FC<Props> = ({ experience }) => {
    if (!experience.awsServicesCategories) {
        return undefined;
    }
    return (
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

            <ExperienceAwsTags experience={experience} />
        </>
    );
};
