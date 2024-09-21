import { Experience } from "./Experience";

interface Params {
    /**
     * The time period label for the experience period.
     * Use the year if no longer ongoing (e.g. 2024).
     * Use "Active" if still ongoing.
     *
     * Experiences that took place over many years (e.g. 2020-2024) are categorised
     * by their final year (i.e. use the final year for the label).
     */
    label: number | "Active";

    /**
     * The experiences that took place within this experience period.
     */
    experiences: Experience[];
}

export class ExperiencePeriod {
    /**
     * The time period label for the experience period.
     */
    public readonly label: number | "Active";

    /**
     * The experiences that took place within this experience period.
     */
    public readonly experiences: Experience[];

    constructor({ label, experiences }: Params) {
        this.label = label;
        this.experiences = experiences;
    }
}
