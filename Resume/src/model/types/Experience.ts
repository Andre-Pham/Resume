import { Link } from "../../services/types/Link";
import { DownloadFile } from "../../services/types/DownloadFile";

interface Params {
    /**
     * Icon image for the experience.
     * This will be the app/software's icon or logo.
     */
    image: string | null;

    /**
     * The experience's name.
     * This will be the app's name, or the website's domain.
     */
    name: string;

    /**
     * The section the experience is grouped into.
     * This will be the final year of the experience's duration range, or "Active" if it's still ongoing.
     */
    section: number | "Active";

    /**
     * The project type of the experience.
     * This will be "Paid Position", "Uni Team Project", "Personal Project" or something similar.
     */
    projectType: string;

    /**
     * The duration of the project, as a year range.
     * For single years, format as "2020".
     * For year ranges, format as "2020 - 2024".
     * For any ongoing duration, format as "2020 - Present".
     */
    duration: string;

    /**
     * The experience's description.
     */
    description: string;

    /**
     * Links associated with the experience.
     */
    links: Link[];

    /**
     * Files available to be downloaded, associated with the experience.
     */
    files: DownloadFile[];

    /**
     * Tags associated with the experience.
     */
    tags: string[];
}

export class Experience {
    /**
     * Icon image for the experience.
     * This will be the app/software's icon or logo.
     */
    public readonly image: string | null;

    /**
     * The experience's name.
     * This will be the app's name, or the website's domain.
     */
    public readonly name: string;

    /**
     * The section the experience is grouped into.
     * This will be the final year of the experience's duration range, or "Active" if it's still ongoing.
     */
    public readonly section: number | "Active";

    /**
     * The project type of the experience.
     * This will be "Paid Position", "Uni Team Project", "Personal Project" or something similar.
     */
    public readonly projectType: string;

    /**
     * The duration of the project, as a year range.
     */
    public readonly duration: string;

    /**
     * The experience's description.
     */
    public readonly description: string;

    /**
     * Links associated with the experience.
     */
    public readonly links: Link[];

    /**
     * Files available to be downloaded, associated with the experience.
     */
    public readonly files: DownloadFile[];

    /**
     * Tags associated with the experience.
     */
    public readonly tags: string[];

    /**
     * The experience's subscript text to be rendered.
     */
    public get subscriptText(): string {
        return this.projectType + " • " + this.duration;
    }

    constructor({ image, name, section, projectType, duration, description, links, files, tags }: Params) {
        this.image = image;
        this.name = name;
        this.section = section;
        this.projectType = projectType;
        this.duration = duration;
        this.description = description;
        this.links = links;
        this.files = files;
        this.tags = tags;
    }
}
