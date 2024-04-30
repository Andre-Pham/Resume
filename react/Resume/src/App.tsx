import { useState } from "react";
import ResText from "./components/base/ResText";
import ResTypography from "./components/styling/ResTypography";
import ResButton from "./components/base/ResButton";
import ResColors from "./components/styling/ResColors";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <ResText typography={ResTypography.pageTitle}>Hello World {count}</ResText>

            <ResButton 
                label="Hello World"
                typography={ResTypography.button}
                color={ResColors.accent}
                onPress={() => {
                    setCount(count + 1)
                }}
                wide={false}
            />
        </>
    );
}

export default App;
