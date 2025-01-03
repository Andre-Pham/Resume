import React, { useState } from "react";
import { ResDimensionPresets } from "../styling/ResDimensionPresets";
import { BasicCard } from "./BasicCard";
import { ResText } from "../components/ResText";
import { ResTypographyPresets } from "../styling/ResTypographyPresets";
import { ResHyperlink } from "../components/ResHyperlink";
import { ResCompactButton } from "../components/ResCompactButton";
import { ResColorPresets } from "../styling/ResColorPresets";
import { GridContainer } from "../containers/grid/GridContainer";
import { DownloadService } from "../../services/DownloadService";
import { mdiTrayArrowDown } from "@mdi/js";
import { usePortraitRendering } from "../hooks/usePortraitRendering";

interface Props {
    style?: React.CSSProperties;
}

export const EducationContent: React.FC<Props> = ({ style }) => {
    const [shouldRenderPortrait, setShouldRenderPortrait] = useState(
        window.innerWidth <= ResDimensionPresets.screenWidthToRenderPortrait,
    );

    usePortraitRendering((shouldRenderPortrait: boolean) => {
        setShouldRenderPortrait(shouldRenderPortrait);
    });

    const downloadDuxAward = (): void => {
        // Fire-and-forget (discard boolean promise)
        void DownloadService.inst.download(DownloadService.inst.duxAward);
    };

    const downloadAcademicTranscript = (): void => {
        // Fire-and-forget (discard boolean promise)
        void DownloadService.inst.download(DownloadService.inst.transcript);
    };

    const downloadHonoursListInclusions = (): void => {
        // Fire-and-forget (discard boolean promise)
        void DownloadService.inst.download(DownloadService.inst.honourListInclusions);
    };

    const downloadLettersOfCommendation = (): void => {
        // Fire-and-forget (discard boolean promise)
        void DownloadService.inst.download(DownloadService.inst.lettersOfCommendation);
    };

    const columnCount = shouldRenderPortrait ? 1 : 2;

    return (
        <GridContainer
            columns={columnCount}
            spacing={ResDimensionPresets.cardColumnSpacing}
            columnSizeRule={"minmax(0, 1fr)"}
            style={{ width: "100%", ...style }}
        >
            <BasicCard title="Bachelor of Software Engineering (Honours)">
                <ResText typography={ResTypographyPresets.body}>{"Monash University, Mar 2020 - Nov 2023"}</ResText>
            </BasicCard>

            <BasicCard title="First Class Honours">
                <ResText typography={ResTypographyPresets.body}>
                    {"WAM: 88.255"}
                    <br />
                    {"GPA: 3.938"}
                </ResText>

                <ResHyperlink
                    typography={ResTypographyPresets.body}
                    url="https://www.monash.edu/students/admin/assessments/results/wam"
                >
                    {"Reading WAM"}
                </ResHyperlink>

                <ResHyperlink
                    typography={ResTypographyPresets.body}
                    url="https://www.monash.edu/students/admin/assessments/results/gpa"
                >
                    {"Reading GPA"}
                </ResHyperlink>
            </BasicCard>

            <BasicCard title="Achievements">
                <ResText typography={ResTypographyPresets.body} style={{ paddingBottom: 6 }}>
                    {
                        "I was the Software Engineering Dux, was included in the Faculty of Engineering Dean's Honour List every year of my degree, and have received multiple letters of commendation for my high academic performance."
                    }
                </ResText>

                <ResCompactButton
                    label={DownloadService.inst.duxAward.label}
                    iconPath={mdiTrayArrowDown}
                    typography={ResTypographyPresets.buttonCompact.withColor(ResColorPresets.textLightPersistent)}
                    color={ResColorPresets.accent}
                    wide={false}
                    onPress={downloadDuxAward}
                    style={{ alignSelf: "flex-start" }}
                />

                <ResCompactButton
                    label={DownloadService.inst.honourListInclusions.label}
                    iconPath={mdiTrayArrowDown}
                    typography={ResTypographyPresets.buttonCompact.withColor(ResColorPresets.textLightPersistent)}
                    color={ResColorPresets.accent}
                    wide={false}
                    onPress={downloadHonoursListInclusions}
                    style={{ alignSelf: "flex-start" }}
                />

                <ResCompactButton
                    label={DownloadService.inst.lettersOfCommendation.label}
                    iconPath={mdiTrayArrowDown}
                    typography={ResTypographyPresets.buttonCompact.withColor(ResColorPresets.textLightPersistent)}
                    color={ResColorPresets.accent}
                    wide={false}
                    onPress={downloadLettersOfCommendation}
                    style={{ alignSelf: "flex-start" }}
                />
            </BasicCard>

            <BasicCard title="Academic Transcript">
                <ResHyperlink
                    typography={ResTypographyPresets.body}
                    url="https://www.myequals.net/sharelink/0780a40a-9e70-420d-a905-31117d1a9388/0d22dbc1-5b1b-4d2a-99d8-8fda0d5e1b03"
                >
                    {"Online academic transcript"}
                </ResHyperlink>

                <ResHyperlink
                    typography={ResTypographyPresets.body}
                    url="https://www.monash.edu/students/support/connect/official-documents/academic-transcripts"
                    style={{ paddingBottom: 6 }}
                >
                    {"What's an academic transcript?"}
                </ResHyperlink>

                <ResCompactButton
                    label={DownloadService.inst.transcript.label}
                    iconPath={mdiTrayArrowDown}
                    typography={ResTypographyPresets.buttonCompact.withColor(ResColorPresets.textLightPersistent)}
                    color={ResColorPresets.accent}
                    wide={false}
                    onPress={downloadAcademicTranscript}
                    style={{ alignSelf: "flex-start" }}
                />
            </BasicCard>
        </GridContainer>
    );
};
