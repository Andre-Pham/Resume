import { DownloadFile } from "./types/DownloadFile";

export class DownloadService {
    public static readonly inst = new DownloadService();

    public readonly transcript = new DownloadFile({
        label: "Transcript",
        fileName: "academic_transcript_official.pdf",
        downloadName: "academic_transcript_andrepham.pdf",
    });

    public readonly teachMeTalkbackUserGuide = new DownloadFile({
        label: "Teach Me Talkback User Guide",
        fileName: "user_guide_teach_me_talkback.pdf",
        downloadName: "user_guide_teach_me_talkback.pdf",
    });

    public readonly honourListInclusions = new DownloadFile({
        label: "Honour List Inclusions",
        fileName: "honour_list_inclusions.zip",
        downloadName: "honour_list_inclusions_andrepham.zip",
    });

    public readonly lettersOfCommendation = new DownloadFile({
        label: "Letters of Commendation",
        fileName: "letters_of_commendation.zip",
        downloadName: "letters_of_commendation_andrepham.zip",
    });

    public readonly duxAward = new DownloadFile({
        label: "Dux Award",
        fileName: "dux_award.zip",
        downloadName: "dux_award_andrepham.zip",
    });

    private constructor() {}

    public async download(file: DownloadFile): Promise<boolean> {
        try {
            const link = document.createElement("a");
            link.href = `${import.meta.env.BASE_URL}files/${file.fileName}`;
            link.download = file.downloadName;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            return true;
        } catch (error) {
            console.error("File download failed:", error);
            return false;
        }
    }
}
