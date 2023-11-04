import React from "react";
import { TouchableOpacity, ViewStyle } from "react-native";
import ResColor from "../../styling/color/ResColor";
import ResIcon from "../ResIcon/ResIcon";
import ResImage from "../ResImage/ResImage";
import { ResImageScale } from "../ResImage/ResImageScale";

interface Props {
    color: ResColor;
    icon?: string; // https://pictogrammers.com/library/mdi/
    iconColor?: ResColor;
    fileName?: string;
    size: number;
    onlyIcon?: boolean;
    style?: ViewStyle;
    onPress: () => void;
}

const ResIconButton: React.FC<Props> = ({
    color,
    icon = null,
    iconColor = null,
    fileName = null,
    size,
    onlyIcon = false,
    style,
    onPress,
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={onPress == null}
            style={{
                backgroundColor: color.getColor(),
                borderRadius: 50,
                width: onlyIcon ? 0 : size,
                height: onlyIcon ? 0 : size,
                justifyContent: "center",
                ...style,
            }}
        >
            {icon == null ? (
                <ResImage
                    fileName={fileName}
                    width={(size * 1.8) / 3.0}
                    height={(size * 1.8) / 3.0}
                    scale={ResImageScale.scaleToFit}
                    style={{
                        alignSelf: "center",
                        tintColor: iconColor?.getColor(),
                    }}
                />
            ) : (
                <ResIcon
                    icon={icon}
                    size={(size * 2.2) / 3.0}
                    color={iconColor ?? new ResColor("#ffffff")}
                    style={{
                        alignSelf: "center",
                    }}
                />
            )}
        </TouchableOpacity>
    );
};

export default ResIconButton;
