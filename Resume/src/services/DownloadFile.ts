class DownloadFile {
    public readonly label: string;
    public readonly fileName: string;
    public readonly downloadName: string;

    constructor(label: string, fileName: string, downloadName: string) {
        this.label = label;
        this.fileName = fileName;
        this.downloadName = downloadName;
    }
}

export default DownloadFile;
