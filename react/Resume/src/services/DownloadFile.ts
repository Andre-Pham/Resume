class DownloadFile {
    public readonly fileName: string;
    public readonly downloadName: string;

    constructor(fileName: string, downloadName: string) {
        this.fileName = fileName;
        this.downloadName = downloadName;
    }
}

export default DownloadFile;
