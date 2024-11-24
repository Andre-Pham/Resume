import { Experience } from "../../model/types/Experience";
import { ResHyperlink } from "../components/ResHyperlink";
import { ResText } from "../components/ResText";
import { ResTypographyPresets } from "../styling/ResTypographyPresets";

interface Props {
    experience: Experience;
}

export const ExperienceLinks: React.FC<Props> = ({ experience }) => {
    if (experience.links.length === 0) {
        return undefined;
    }
    return experience.links.map((link) => (
        <ResText typography={ResTypographyPresets.body} key={link.url}>
            {link.label + ": "}

            <ResHyperlink url={link.url} typography={ResTypographyPresets.body}>
                {link.shownURL.toLowerCase()}
            </ResHyperlink>
        </ResText>
    ));
};
