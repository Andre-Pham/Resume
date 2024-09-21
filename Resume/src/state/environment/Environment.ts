import { isMobile } from "react-device-detect";
import { ResDimensionPresets } from "../../interface/styling/ResDimensionPresets";

export class Environment {
    public static get shouldRenderPortrait(): boolean {
        if (isMobile) {
            const isPortrait = window.innerWidth < window.innerHeight;
            if (isPortrait) {
                return true;
            } else {
                // If we're on a mobile device and we're in landscape, just use screen dimensions
                // Note: .width and .height don't change with orientation so we take the max
                const width = Math.max(window.screen.width, window.screen.height);
                const shouldRenderPortrait = width <= ResDimensionPresets.screenWidthToRenderPortrait;
                return shouldRenderPortrait;
            }
        } else {
            const shouldRenderPortrait = window.innerWidth <= ResDimensionPresets.screenWidthToRenderPortrait;
            return shouldRenderPortrait;
        }
    }
}
