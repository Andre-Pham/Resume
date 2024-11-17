export class InlineLink {
    /**
     * The text to embed the link into.
     * E.g. "Click me to view trailer" for "https://www.youtube.com/watch?v=Zl3jHVbDxws".
     */
    public readonly text: string;

    /**
     * The actual URL to open.
     * E.g. "https://www.youtube.com/watch?v=Zl3jHVbDxws".
     */
    public readonly url: string;

    constructor({ text, url }: { text: string; url: string }) {
        this.text = text;
        this.url = url;
    }
}
