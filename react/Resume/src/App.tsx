import { useState } from "react";
import ResText from "./components/base/ResText";
import ResTypography from "./components/styling/ResTypography";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <ResText typography={ResTypography.pageTitle}>Hello World</ResText>
        </>
    );
}

export default App;
