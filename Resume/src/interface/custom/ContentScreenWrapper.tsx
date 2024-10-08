import React from "react";
import { ResText } from "../components/ResText";
import { ResTypographyPresets } from "../styling/ResTypographyPresets";
import { VStack } from "../containers/stacks/VStack";
import { ResDimensionPresets } from "../styling/ResDimensionPresets";
import { HStack } from "../containers/stacks/HStack";
import { PressableContainer } from "../containers/interactive/PressableContainer";
import { ResIcon } from "../components/ResIcon";
import { mdiChevronLeft } from "@mdi/js";
import { useNavigate } from "react-router-dom";
import { StateManager } from "../../state/publishers/StateManager";
import { ActiveSection } from "../../state/publishers/types/ActiveSection";
import { useResetScroll } from "../hooks/useResetScroll";
import { RouterService } from "../../services/RouterService";

interface Props {
    title: string;
    children: React.ReactNode;
    style?: React.CSSProperties;
}

export const ContentScreenWrapper: React.FC<Props> = ({ title, children, style }) => {
    const navigate = useNavigate();

    useResetScroll();

    const goBack = (): void => {
        StateManager.activeSection.publish(ActiveSection.none);
        RouterService.inst.navigateHome(navigate);
    };

    return (
        <VStack
            spacing={ResDimensionPresets.screenPadding}
            style={{ padding: ResDimensionPresets.screenPadding, ...style }}
        >
            <HStack spacing={8} style={{ alignItems: "center" }}>
                <PressableContainer onPress={goBack} disableSelection={true}>
                    <ResIcon
                        iconPath={mdiChevronLeft}
                        size={45}
                        color={ResTypographyPresets.header.colorObject}
                        style={{ marginLeft: -20 }}
                    />
                </PressableContainer>

                <ResText typography={ResTypographyPresets.header} wide={false}>
                    {title}
                </ResText>
            </HStack>

            {children}
        </VStack>
    );
};
