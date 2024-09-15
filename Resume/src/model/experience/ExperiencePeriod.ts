import { Experience } from "./Experience";

export class ExperiencePeriod {
    constructor(
        public readonly label: number | "Active",
        public readonly experiences: Experience[],
    ) {}
}
