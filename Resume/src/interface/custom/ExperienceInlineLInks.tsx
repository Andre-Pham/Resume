import { Experience } from "../../model/types/Experience";
import { ResHyperlink } from "../components/ResHyperlink";
import { ResTypographyPresets } from "../styling/ResTypographyPresets";

interface Props {
    experience: Experience;
}

export const ExperienceInlineLinks: React.FC<Props> = ({ experience }) => {
    if (experience.inlineLinks === undefined || experience.inlineLinks.length === 0) {
        return undefined;
    }
    return experience.inlineLinks.map((link) => (
        <ResHyperlink url={link.url} key={link.url} typography={ResTypographyPresets.body}>
            {link.text}
        </ResHyperlink>
    ));
};
