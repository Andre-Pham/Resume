interface Params {
    /**
     * The label to indicate what the link is linking to.
     * E.g. "Trailer" for "https://www.youtube.com/watch?v=Zl3jHVbDxws".
     */
    label: string;

    /**
     * The preview URL to be shown.
     * E.g. "youtube.com/watch?v=Zl3jHVbDxws" for "https://www.youtube.com/watch?v=Zl3jHVbDxws".
     */
    shownURL: string;

    /**
     * The actual URL to open.
     * E.g. "https://www.youtube.com/watch?v=Zl3jHVbDxws".
     */
    url: string;
}

export class Link {
    /**
     * The label to indicate what the link is linking to.
     * E.g. "Trailer" for "https://www.youtube.com/watch?v=Zl3jHVbDxws".
     */
    public readonly label: string;

    /**
     * The preview URL to be shown.
     * E.g. "youtube.com/watch?v=Zl3jHVbDxws" for "https://www.youtube.com/watch?v=Zl3jHVbDxws".
     */
    public readonly shownURL: string;

    /**
     * The actual URL to open.
     * E.g. "https://www.youtube.com/watch?v=Zl3jHVbDxws".
     */
    public readonly url: string;

    constructor({ label, shownURL, url }: Params) {
        this.label = label;
        this.shownURL = shownURL.toLowerCase();
        this.url = url;
    }
}
