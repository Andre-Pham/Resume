import Link from "../Link";

class Experience {

    public get subscriptText(): string {
        return this.projectType + " • " + this.duration;
    }

    constructor(
        public readonly name: string,
        public readonly section: number | "Active",
        public readonly projectType: string,
        public readonly duration: string,
        public readonly description: string,
        public readonly links: Link[],
        public readonly tags: string[],
    ) { }

}

export default Experience;