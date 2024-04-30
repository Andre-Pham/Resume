import { useState } from "react";
import "../global/fonts.css";
import ResText from "./components/base/ResText";
import ResTypography from "./components/styling/ResTypography";
import ResButton from "./components/base/ResButton/ResButton";
import ResColors from "./components/styling/ResColors";
import { mdiAccount } from "@mdi/js";
import ResCompactButton from "./components/base/ResCompactButton";
import ResChip from "./components/base/ResChip/ResChip";
import HStack from "./components/containers/HStack";
import VStack from "./components/containers/VStack";
import ResFlexImage from "./components/base/ResFlexImage/ResFlexImage";
import ResHyperlink from "./components/base/ResHyperlink/ResHyperlink";
import ResIcon from "./components/base/ResIcon/ResIcon";

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

                <HStack spacing={12}>
                    <ResChip color={ResColors.chipBackground}>
                        <ResText typography={ResTypography.chip}>Hello Chip</ResText>
                    </ResChip>

                    <ResChip color={ResColors.chipBackground}>
                        <ResText typography={ResTypography.chip}>Hello Chip 2</ResText>
                    </ResChip>

                    <ResChip
                        color={ResColors.chipBackground}
                        onPress={() => {
                            setCount(count + 1);
                        }}
                    >
                        <ResText typography={ResTypography.chip}>Press Me</ResText>
                    </ResChip>
                </HStack>

                <ResFlexImage fileName="profile_picture.png" flexVertical={false} />

                <ResHyperlink
                    typography={ResTypography.body}
                    url="https://www.monash.edu/students/admin/assessments/results/wam"
                >
                    {"Reading WAM"}
                </ResHyperlink>

                <ResIcon iconPath={mdiAccount} color={ResColors.accent} size={3} />
            </VStack>
        </>
    );
}

export default App;
