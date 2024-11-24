import { Experiences } from "../preset-data/Experiences";
import { Experience } from "./Experience";

export class Employment {
    /**
     * The title of the role.
     * E.g. "iOS Developer".
     */
    public readonly title: string;

    /**
     * The name of the company worked at.
     */
    public readonly company: string;

    /**
     * The duration of the project, as a month + year range.
     * Format as "Jul 2020 - Nov 2024".
     * For any ongoing duration, format as "Jul 2020 - Present".
     */
    public readonly duration: string;

    /**
     * The description of what I worked on and was responsible for.
     * Don't include specific technologies. Keep it to my responsibilities and areas
     * of the app/platform I worked on.
     */
    public readonly description: string;

    /**
     * The experiences corresponding to this employment.
     */
    public readonly experiences: Experience[];

    /**
     * The employment's subscript text to be rendered.
     */
    public get subscriptText(): string {
        return this.company + " • " + this.duration;
    }

    constructor({
        title,
        company,
        duration,
        description,
        experienceNames,
    }: {
        title: string;
        company: string;
        duration: string;
        description: string;
        experienceNames: string[];
    }) {
        this.title = title;
        this.company = company;
        this.duration = duration;
        this.description = description;
        this.experiences = [];
        for (const name of experienceNames) {
            const experience = Experiences.find((experience) => experience.name === name);
            if (experience) {
                this.experiences.push(experience);
            } else {
                throw new Error(`No matching experience with name "${name}"`);
            }
        }
    }
}
