import { useState } from "react";
import "../global/fonts.css";
import ResText from "./components/base/ResText/ResText";
import ResTypography from "./components/styling/ResTypography";
import ResButton from "./components/base/ResButton/ResButton";
import ResColors from "./components/styling/ResColors";
import { mdiAccount, mdiCircleHalfFull } from "@mdi/js";
import ResCompactButton from "./components/base/ResButton/ResCompactButton";
import ResChip from "./components/base/ResChip/ResChip";
import HStack from "./components/containers/Stacks/HStack/HStack";
import VStack from "./components/containers/Stacks/VStack/VStack";
import ResFlexImage from "./components/base/ResFlexImage/ResFlexImage";
import ResHyperlink from "./components/base/ResHyperlink/ResHyperlink";
import ResIcon from "./components/base/ResIcon/ResIcon";
import ResImage from "./components/base/ResImage/ResImage";
import { ResImageScale } from "./components/base/ResImage/ResImageScale";
import ResIconButton from "./components/base/ResIconButton/ResIconButton";
import ResIconButtonLabelled from "./components/base/ResIconButtonLabelled/ResIconButtonLabelled";
import ZStack from "./components/containers/Stacks/ZStack/ZStack";
import VGap from "./components/containers/Spacing/VGap/VGap";
import Spacer from "./components/containers/Spacing/Spacer/Spacer";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <VStack spacing={12}>
                <ResText typography={ResTypography.pageTitle}>Hello World {count}</ResText>

                <ResButton
                    label="Hello World"
                    typography={ResTypography.button}
                    color={ResColors.accent}
                    onPress={() => {
                        setCount(count + 1);
                    }}
                    wide={false}
                    iconPath={mdiAccount}
                />

                <ResCompactButton
                    label="Hello World"
                    typography={ResTypography.button}
                    color={ResColors.accent}
                    onPress={() => {
                        setCount(count + 1);
                    }}
                    wide={false}
                    iconPath={mdiAccount}
                />

                <HStack spacing={0} style={{ border: "1px solid red" }}>
                    <ResChip color={ResColors.chipBackground}>
                        <ResText typography={ResTypography.chip}>Hello Chip</ResText>
                    </ResChip>

                    <ResChip color={ResColors.chipBackground}>
                        <ResText typography={ResTypography.chip}>Hello Chip 2</ResText>
                    </ResChip>

                    <Spacer />

                    <ResChip
                        color={ResColors.chipBackground}
                        onPress={() => {
                            setCount(count + 1);
                        }}
                    >
                        <ResText typography={ResTypography.chip}>Hello Chip</ResText>
                    </ResChip>
                </HStack>

                <ResFlexImage fileName="profile_picture.png" flexVertical={false} />

                <ResHyperlink
                    typography={ResTypography.body}
                    url="https://www.monash.edu/students/admin/assessments/results/wam"
                >
                    {"Reading WAM"}
                </ResHyperlink>

                <ResIcon iconPath={mdiAccount} color={ResColors.accent} size={50} />

                <ResImage
                    fileName="profile_picture.png"
                    width={100}
                    height={50}
                    scale={ResImageScale.scaleToFit}
                    style={{ border: "1px solid red" }}
                />

                <VGap size={20} />

                <ResImage
                    fileName="profile_picture.png"
                    width={50}
                    height={100}
                    scale={ResImageScale.scaleToFit}
                    style={{ border: "1px solid red" }}
                />

                <ResIconButton
                    color={ResColors.accent}
                    size={40}
                    fileName="moon.png"
                    onPress={() => {
                        setCount(count + 1);
                    }}
                />

                <ResIconButton
                    color={ResColors.accent}
                    size={60}
                    fileName="profile_picture.png"
                    iconColor={ResColors.chipBackground}
                    onPress={() => {
                        setCount(count + 1);
                    }}
                />

                <ResIconButton
                    color={ResColors.accent}
                    size={60}
                    iconPath={mdiCircleHalfFull}
                    iconColor={ResColors.chipBackground}
                    onPress={() => {
                        setCount(count + 1);
                    }}
                />

                <ResIconButtonLabelled
                    color={ResColors.accent}
                    size={60}
                    iconPath={mdiCircleHalfFull}
                    iconColor={ResColors.chipBackground}
                    onPress={() => {
                        setCount(count + 1);
                    }}
                    label="Hello World"
                />

                <ZStack style={{ border: "1px solid red" }}>
                    <ResText typography={ResTypography.pageTitle}>Hello World {count}</ResText>

                    <VStack>
                        <ResText typography={ResTypography.pageTitle}>Hello World Wow</ResText>

                        <ResText typography={ResTypography.pageTitle}>Hello World Wow</ResText>

                        <ResText typography={ResTypography.pageTitle}>Hello World Wow</ResText>
                    </VStack>
                </ZStack>

                <HStack spacing={0} style={{ border: "1px solid red" }}>
                    <ZStack style={{ border: "1px solid red" }}>
                        <ResText typography={ResTypography.pageTitle}>Hello World {count}</ResText>

                        <VStack>
                            <ResText typography={ResTypography.pageTitle}>Hello World Wow</ResText>

                            <ResText typography={ResTypography.pageTitle}>Hello World Wow</ResText>

                            <ResText typography={ResTypography.pageTitle}>Hello World Wow</ResText>
                        </VStack>
                    </ZStack>

                    <ZStack style={{ border: "1px solid red" }}>
                        <ResText typography={ResTypography.pageTitle}>Hello World {count}</ResText>

                        <VStack>
                            <ResText typography={ResTypography.pageTitle}>Hello World Wow</ResText>

                            <ResText typography={ResTypography.pageTitle}>Hello World Wow</ResText>

                            <ResText typography={ResTypography.pageTitle}>Hello World Wow</ResText>
                        </VStack>
                    </ZStack>
                </HStack>
            </VStack>
        </>
    );
}

export default App;
