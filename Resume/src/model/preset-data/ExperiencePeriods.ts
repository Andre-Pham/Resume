import { ExperiencePeriod } from "../types/ExperiencePeriod";
import { Experiences } from "./Experiences";

export const ExperiencePeriods: () => ExperiencePeriod[] = () => {
    const result: ExperiencePeriod[] = [];
    for (const experience of Experiences) {
        let added = false;
        for (const section of result) {
            if (section.label === experience.section) {
                section.experiences.push(experience);
                added = true;
                break;
            }
        }
        if (!added) {
            result.push(
                new ExperiencePeriod({
                    label: experience.section,
                    experiences: [experience],
                }),
            );
        }
    }
    result.sort((a, b) => {
        // Compare the types
        const aIsString = typeof a.label === "string";
        const bIsString = typeof b.label === "string";

        // Strings go at the top
        if (aIsString && !bIsString) {
            return -1;
        }
        if (!aIsString && bIsString) {
            return 1;
        }

        // Numbers are sorted in decreasing order
        if (typeof a.label === "number" && typeof b.label === "number") {
            return b.label - a.label;
        }

        // Preserve the original order if both values are not strings or numbers
        return 0;
    });
    return result;
};
