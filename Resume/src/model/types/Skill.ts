export class Skill {
    /**
     * The skill's title.
     */
    public readonly title: string;

    /**
     * The skill's description.
     */
    public readonly description: string;

    constructor({ title, description }: { title: string; description: string }) {
        this.title = title;
        this.description = description;
    }
}
