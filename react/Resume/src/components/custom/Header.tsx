import React from "react";
import HStack from "../containers/Stacks/HStack";
import ResImage from "../base/ResImage";
import VStack from "../containers/Stacks/VStack";
import ResText from "../base/ResText";
import ResTypography from "../styling/ResTypography";
import ResIconButton from "../base/ResIconButton";
import ResColors from "../styling/ResColors";
import ResDimensions from "../styling/ResDimensions";
import Spacer from "../containers/Spacing/Spacer";

interface Props {
    // None
}

const Header: React.FC<Props> = ({}) => {
    return (
        <HStack spacing={16} style={{ alignItems: "center" }}>
            <ResImage
                height={64}
                width={64}
                fileName="profile_picture.png"
                style={{ borderRadius: 50, alignSelf: "center" }}
            />

            <VStack spacing={4} style={{ alignSelf: "center" }}>
                <ResText typography={ResTypography.pageTitle} verticalWrap={true}>
                    {"Andre Pham"}
                </ResText>

                <ResText typography={ResTypography.subscript} verticalWrap={true}>
                    {"andrekypham@gmail.com"}
                </ResText>
            </VStack>

            <HStack style={{ flex: 1 }}>
                <Spacer />

                <ResIconButton
                    color={ResColors.background}
                    fileName={"moon.png"}
                    size={ResDimensions.iconButtonSize}
                    onPress={() => {}}
                    onlyIcon={true}
                />
            </HStack>
        </HStack>
    );
};

export default Header;
