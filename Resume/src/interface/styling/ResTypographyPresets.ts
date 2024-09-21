import { ResColorPresets } from "./ResColorPresets";
import { ResFontFamily } from "./typography/ResFontFamily";
import { ResFontWeight } from "./typography/ResFontWeight";
import { ResTypography } from "./typography/ResTypography";

/**
 * Predefined typography to be used application-wide.
 */
export class ResTypographyPresets {
    static get pageTitle(): ResTypography {
        return new ResTypography({
            size: 32,
            fontFamily: ResFontFamily.gilroy,
            color: ResColorPresets.textDark,
            weight: ResFontWeight.black,
            kerning: 0.2,
        });
    }

    static get splash(): ResTypography {
        return new ResTypography({
            size: 34,
            fontFamily: ResFontFamily.circular,
            color: ResColorPresets.textDark,
            weight: ResFontWeight.bold,
        });
    }

    static get standoutBody(): ResTypography {
        return new ResTypography({
            size: 16,
            fontFamily: ResFontFamily.plexMono,
            color: ResColorPresets.textDark,
        });
    }

    static get body(): ResTypography {
        return new ResTypography({
            size: 14,
            fontFamily: ResFontFamily.plexMono,
            color: ResColorPresets.textDark,
        });
    }

    static get subscript(): ResTypography {
        return new ResTypography({
            size: 14,
            fontFamily: ResFontFamily.plexMono,
            color: ResColorPresets.textSemiDark,
            weight: ResFontWeight.regular,
        });
    }

    static get subscriptLabel(): ResTypography {
        return new ResTypography({
            size: 11.5,
            fontFamily: ResFontFamily.plexMono,
            color: ResColorPresets.textSemiDark,
            weight: ResFontWeight.regular,
        });
    }

    static get chip(): ResTypography {
        return new ResTypography({
            size: 11.5,
            fontFamily: ResFontFamily.plexMono,
            color: ResColorPresets.textLightPersistent,
            weight: ResFontWeight.regular,
        });
    }

    static get button(): ResTypography {
        return new ResTypography({
            size: 15,
            fontFamily: ResFontFamily.plexMono,
            color: ResColorPresets.textLight,
        });
    }

    static get buttonCompact(): ResTypography {
        return new ResTypography({
            size: 14,
            fontFamily: ResFontFamily.plexMono,
            color: ResColorPresets.textLight,
            weight: ResFontWeight.regular,
        });
    }

    static get sectionTitle(): ResTypography {
        return new ResTypography({
            size: 26,
            fontFamily: ResFontFamily.gilroy,
            color: ResColorPresets.textDark,
            weight: ResFontWeight.black,
            kerning: 1.0,
        });
    }

    static get header(): ResTypography {
        return new ResTypography({
            size: 31,
            fontFamily: ResFontFamily.circular,
            color: ResColorPresets.textDark,
            weight: ResFontWeight.bold,
        });
    }
}
