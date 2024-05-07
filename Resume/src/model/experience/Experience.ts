import Link from "../../services/Link";
import DownloadFile from "../../services/DownloadFile";

class Experience {
    public get subscriptText(): string {
        return this.projectType + " • " + this.duration;
    }

    constructor(
        public readonly image: string | null,
        public readonly name: string,
        public readonly section: number | "Active",
        public readonly projectType: string,
        public readonly duration: string,
        public readonly description: string,
        public readonly links: Link[],
        public readonly files: DownloadFile[],
        public readonly tags: string[],
    ) {}
}

export default Experience;
