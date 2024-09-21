interface Params {
    /**
     * The label on the component to download this file.
     */
    label: string;

    /**
     * The file name.
     */
    fileName: string;

    /**
     * What the file should be named when the user downloads it.
     */
    downloadName: string;
}

export class DownloadFile {
    /**
     * The label on the component to download this file.
     */
    public readonly label: string;

    /**
     * The file name.
     */
    public readonly fileName: string;

    /**
     * What the file should be named when the user downloads it.
     */
    public readonly downloadName: string;

    constructor({ label, fileName, downloadName }: Params) {
        this.label = label;
        this.fileName = fileName;
        this.downloadName = downloadName;
    }
}
