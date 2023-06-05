import ResColors from "./ResColors";
import { ResFontFamily } from "./typography/ResFontFamily";
import ResTypographyConfig from "./typography/ResTypographyConfig";

class ResTypography {

    static get body(): ResTypographyConfig {
        return new ResTypographyConfig(
            15,
            ResFontFamily.plexMono,
            ResColors.textDark,
        );
    }

}

export default ResTypography;