import React from "react";
import { ResText } from "../base/ResText";
import { ResTypography } from "../styling/ResTypography";
import { VStack } from "../containers/Stacks/VStack";
import { ResDimensions } from "../styling/ResDimensions";
import { HStack } from "../containers/Stacks/HStack";
import { PressableContainer } from "../containers/Interactive/PressableContainer";
import { ResIcon } from "../base/ResIcon";
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

    const goBack = () => {
        StateManager.activeSection.publish(ActiveSection.none);
        RouterService.inst.navigateHome(navigate);
    };

    return (
        <VStack spacing={ResDimensions.screenPadding} style={{ padding: ResDimensions.screenPadding, ...style }}>
            <HStack spacing={8} style={{ alignItems: "center" }}>
                <PressableContainer onPress={goBack} disableSelection={true}>
                    <ResIcon
                        iconPath={mdiChevronLeft}
                        size={45}
                        color={ResTypography.header.colorObject}
                        style={{ marginLeft: -20 }}
                    />
                </PressableContainer>

                <ResText typography={ResTypography.header} wide={false}>
                    {title}
                </ResText>
            </HStack>

            {children}
        </VStack>
    );
};
