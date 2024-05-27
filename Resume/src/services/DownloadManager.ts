import DownloadFile from "./DownloadFile";

class DownloadManger {
    public static readonly inst = new DownloadManger();

    public readonly transcript = new DownloadFile(
        "Transcript",
        "academic_transcript_official.pdf",
        "academic_transcript_andrepham.pdf",
    );

    public readonly teachMeTalkbackUserGuide = new DownloadFile(
        "Teach Me Talkback User Guide",
        "user_guide_teach_me_talkback.pdf",
        "user_guide_teach_me_talkback.pdf",
    );

    public readonly honourListInclusions = new DownloadFile(
        "Honour List Inclusions",
        "honour_list_inclusions.zip",
        "honour_list_inclusions_andrepham.zip",
    );

    public readonly lettersOfCommendation = new DownloadFile(
        "Letters of Commendation",
        "letters_of_commendation.zip",
        "letters_of_commendation_andrepham.zip",
    );

    public readonly duxAward = new DownloadFile("Dux Award", "dux_award.zip", "dux_award_andrepham.zip");

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

export default DownloadManger;
