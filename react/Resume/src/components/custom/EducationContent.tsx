import React, { useEffect, useState } from "react";
import ResDimensions from "../styling/ResDimensions";
import BasicCard from "./BasicCard";
import ResText from "../base/ResText";
import ResTypography from "../styling/ResTypography";
import ResHyperlink from "../base/ResHyperlink";
import ResCompactButton from "../base/ResCompactButton";
import ResColors from "../styling/ResColors";
import GridContainer from "../containers/GridContainer";
import DownloadManager from "../../services/DownloadManager";
import { mdiTrayArrowDown } from "@mdi/js";

interface Props {
    style?: React.CSSProperties;
}

const EducationContent: React.FC<Props> = ({ style }) => {
    const [shouldRenderPortrait, setShouldRenderPortrait] = useState(
        window.innerWidth <= ResDimensions.screenWidthToRenderPortrait,
    );

    useEffect(() => {
        const handleResize = () => {
            setShouldRenderPortrait(window.innerWidth <= ResDimensions.screenWidthToRenderPortrait);
        };
        // When the window is resized, re-update
        window.addEventListener("resize", handleResize);
        // Cleanup the event listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const downloadAcademicTranscript = async () => {
        DownloadManager.inst.download(DownloadManager.inst.transcript);
    };

    const downloadHonoursListInclusions = () => {
        DownloadManager.inst.download(DownloadManager.inst.honourListInclusions);
    };

    const downloadLettersOfCommendation = () => {
        DownloadManager.inst.download(DownloadManager.inst.lettersOfCommendation);
    };

    let columnCount = shouldRenderPortrait ? 1 : 2;
    let columnSizeRule = `${100 / columnCount}%`;

    return (
        <GridContainer
            columns={columnCount}
            spacing={ResDimensions.cardColumnSpacing}
            columnSizeRule={columnSizeRule}
            style={style}
        >
            <BasicCard title="Bachelor of Software Engineering (Honours)">
                <ResText typography={ResTypography.body}>{"Monash University, Mar 2020 - Nov 2023"}</ResText>
            </BasicCard>

            <BasicCard title="First Class Honours">
                <ResText typography={ResTypography.body}>
                    {"WAM: 88.25"}
                    <br />
                    {"GPA: 3.938"}
                </ResText>

                <ResHyperlink
                    typography={ResTypography.body}
                    url="https://www.monash.edu/students/admin/assessments/results/wam"
                >
                    {"Reading WAM"}
                </ResHyperlink>

                <ResHyperlink
                    typography={ResTypography.body}
                    url="https://www.monash.edu/students/admin/assessments/results/gpa"
                >
                    {"Reading GPA"}
                </ResHyperlink>
            </BasicCard>

            <BasicCard title="Academic Transcript">
                <ResHyperlink
                    typography={ResTypography.body}
                    url="https://www.myequals.net/sharelink/0780a40a-9e70-420d-a905-31117d1a9388/0d22dbc1-5b1b-4d2a-99d8-8fda0d5e1b03"
                >
                    {"Online academic transcript"}
                </ResHyperlink>

                <ResHyperlink
                    typography={ResTypography.body}
                    url="https://www.monash.edu/students/support/connect/official-documents/academic-transcripts"
                    style={{ paddingBottom: 6 }}
                >
                    {"What's an academic transcript?"}
                </ResHyperlink>

                <ResCompactButton
                    label={DownloadManager.inst.transcript.label}
                    iconPath={mdiTrayArrowDown}
                    typography={ResTypography.buttonSmall.withColor(ResColors.textLightPersistent)}
                    color={ResColors.accent}
                    wide={false}
                    onPress={downloadAcademicTranscript}
                    style={{ alignSelf: "flex-start" }}
                />
            </BasicCard>

            <BasicCard title="High Achiever">
                <ResText typography={ResTypography.body} style={{ paddingBottom: 6 }}>
                    {
                        "I was included in the Faculty of Engineering Dean's Honour List every year of my degree, and have received multiple letters of commendation for my high academic performance."
                    }
                </ResText>

                <ResCompactButton
                    label={DownloadManager.inst.honourListInclusions.label}
                    iconPath={mdiTrayArrowDown}
                    typography={ResTypography.buttonSmall.withColor(ResColors.textLightPersistent)}
                    color={ResColors.accent}
                    wide={false}
                    onPress={downloadHonoursListInclusions}
                    style={{ alignSelf: "flex-start" }}
                />

                <ResCompactButton
                    label={DownloadManager.inst.lettersOfCommendation.label}
                    iconPath={mdiTrayArrowDown}
                    typography={ResTypography.buttonSmall.withColor(ResColors.textLightPersistent)}
                    color={ResColors.accent}
                    wide={false}
                    onPress={downloadLettersOfCommendation}
                    style={{ alignSelf: "flex-start" }}
                />
            </BasicCard>
        </GridContainer>
    );
};

export default EducationContent;
