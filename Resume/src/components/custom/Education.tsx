import { useEffect, useState } from 'react';
import { Dimensions, ViewStyle } from 'react-native';
import Environment from '../../state/environment/Environment';
import StateManager from '../../state/publishers/StateManager';
import ResSmallButton from '../base/ResButton/ResSmallButton';
import ResHyperlink from '../base/ResHyperlink/ResHyperlink';
import ResText from '../base/ResText/ResText';
import HStack from '../containers/HStack';
import ResColors from '../styling/ResColors';
import ResDimensions from '../styling/ResDimensions';
import ResTypography from '../styling/ResTypography';
import BasicCard from './BasicCard';

interface Props {
    style?: ViewStyle;
}

const Education: React.FC<Props> = ({
    style,
}) => {
    const [screenIsPortrait, setScreenIsPortrait] = useState(Environment.instance.screenIsPortrait());
    const [componentWidth, setComponentWidth] = useState(StateManager.contentWidth.read());

    useEffect(() => {
        Dimensions.addEventListener('change', (newDimensions) => {
            setScreenIsPortrait(Environment.instance.screenIsPortrait());
        });
    }, []);

    StateManager.contentWidth.subscribe(() => {
        setComponentWidth(StateManager.contentWidth.read());
    });

    let columnCount = screenIsPortrait ? 1 : 2;
    let gap = (columnCount - 1)*ResDimensions.cardColumnSpacing;

    const downloadAcademicTranscript = async () => {
        const fileUrl = require('/assets/files/academic_transcript_unofficial.pdf');
        try {
            // Assume we're on web
            const link = document.createElement('a');
            link.href = fileUrl;
            link.download = 'academic_transcript_andrepham.pdf';
            link.click();
        } catch (error) {
            console.error('File download failed:', error);
        }
    };

    return (
        <HStack 
            spacing={ResDimensions.cardColumnSpacing} 
            style={{ 
                width: componentWidth, 
                ...style,
            }}
        >
            <BasicCard 
                title="Bachelor of Software Engineering (Honours)"
                style={{ width: (componentWidth - gap) / columnCount }}
            >
                <ResText typography={ResTypography.body}>
                    {"Monash University, Mar 2020 - Nov 2023"}
                </ResText>
            </BasicCard>

            <BasicCard 
                title="First Class Honours"
                style={{ width: (componentWidth - gap) / columnCount }}
            >
                <ResText typography={ResTypography.body}>
                    {"WAM: 87.625\nGPA: 3.917"}
                </ResText>

                <ResHyperlink 
                    typography={ResTypography.body}
                    url="https://www.monash.edu/students/admin/exams/results/results-legend"
                >
                    {"What do these mean?"}
                </ResHyperlink>
            </BasicCard>

            <BasicCard 
                title="Academic Transcript"
                style={{ width: (componentWidth - gap) / columnCount }}
            >
                <ResSmallButton 
                    label='download'
                    typography={ResTypography.buttonSmall.withColor(ResColors.textLightPersistent)}
                    color={ResColors.accent}
                    wide={false}
                    onPress={downloadAcademicTranscript}
                    style={{ alignSelf: 'flex-start' }}
                />

                <ResHyperlink 
                    typography={ResTypography.body}
                    url="https://www.monash.edu/students/support/connect/official-documents/academic-transcripts"
                >
                    {"What's an academic transcript?"}
                </ResHyperlink>
            </BasicCard>
        </HStack>
    );
}

export default Education;