import { Link } from "../../services/types/Link";
import { DownloadFile } from "../../services/types/DownloadFile";
import { InlineLink } from "../../services/types/InlineLink";

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
     * For single years, format as "2020".
     * For year ranges, format as "2020 - 2024".
     * For any ongoing duration, format as "2020 - Present".
     */
    public readonly duration: string;

    /**
     * The experience's description.
     */
    public readonly description: string;

    /**
     * The experience's optional body to render.
     */
    public readonly inlineLinks?: InlineLink[];

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
     * The AWS services categories of all the AWS services used.
     * View them at: https://docs.aws.amazon.com/whitepapers/latest/aws-overview/amazon-web-services-cloud-platform.html
     * Services: https://aws.amazon.com/products/?aws-products-all
     *
     * Because a "AWS Networking & Content Delivery services" tag is way too long.
     * So we add a new tags section for specifically AWS categories and just have "Networking & Content Delivery".
     *
     * IMPORTANT:
     * To check a service's category, DON'T just search them up at https://aws.amazon.com/products/?aws-products-all.
     * You have to open it. For example, search SES:
     * https://aws.amazon.com/products/?aws-products-all&aws-products-all.q=SES
     * It says its category is "Front-End Web & Mobile".
     * But it's not! Open it up, and it's actually "Business Applications" - https://aws.amazon.com/ses/.
     */
    public readonly awsServicesCategories?: AwsServiceCategory[];

    /**
     * The experience's subscript text to be rendered.
     */
    public get subscriptText(): string {
        return this.projectType + " • " + this.duration;
    }

    constructor({
        image,
        name,
        projectType,
        start,
        end,
        description,
        inlineLinks,
        links,
        files,
        tags,
        awsServicesCategories,
    }: {
        image: string | null;
        name: string;
        projectType: string;
        start: number;
        end: number | null;
        description: string;
        inlineLinks?: InlineLink[];
        links: Link[];
        files: DownloadFile[];
        tags: string[];
        awsServicesCategories?: AwsServiceCategory[];
    }) {
        this.image = image;
        this.name = name;
        this.section = end ?? "Active";
        this.projectType = projectType;
        if (start === end) {
            this.duration = String(end);
        } else {
            this.duration = `${start} - ${end ?? "Present"}`;
        }
        this.description = description;
        this.inlineLinks = inlineLinks;
        this.links = links;
        this.files = files;
        this.tags = tags;
        this.awsServicesCategories =
            awsServicesCategories && (this.pairShortAndLongStrings(awsServicesCategories) as AwsServiceCategory[]);
    }

    private pairShortAndLongStrings(arr: string[]): string[] {
        // Sort the array by length (ascending)
        const sortedByLength = [...arr].sort((a, b) => a.length - b.length);
        // Create two pointers for shortest and longest
        let left = 0;
        let right = sortedByLength.length - 1;
        const result: string[] = [];
        // Alternate picking shortest and longest
        while (left <= right) {
            if (left === right) {
                result.push(sortedByLength[left]);
            } else {
                result.push(sortedByLength[left]);
                result.push(sortedByLength[right]);
            }
            left++;
            right--;
        }
        return result;
    }
}
