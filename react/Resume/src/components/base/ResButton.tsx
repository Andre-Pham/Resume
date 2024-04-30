import React from 'react';
import ResTypographyConfig from '../styling/typography/ResTypographyConfig';
import ResText from './ResText';
import ResColor from '../styling/color/ResColor';

interface Props {
    label: string;
    typography: ResTypographyConfig;
    color: ResColor;
    icon?: string;  // Icon from Material Icons web font
    disabled?: boolean;
    wide?: boolean;
    style?: React.CSSProperties;
    onPress: () => void;
}

const ResButton: React.FC<Props> = ({
    label,
    typography,
    color,
    icon = undefined,
    disabled = false,
    wide = true,
    style,
    onPress,
}) => {
    return (
        <button
            onClick={!disabled ? onPress : undefined}
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px 24px',
                borderRadius: '50px',
                backgroundColor: color.getColor(),
                opacity: disabled ? 0.5 : 1,
                width: wide ? '100%' : undefined,
                alignSelf: wide ? undefined : 'center',
                border: 'none',
                cursor: disabled ? 'not-allowed' : 'pointer',
                ...style,
            }}
            disabled={disabled}
        >
            {icon && (
                <i className={`material-icons`} style={{ paddingRight: '6px', fontSize: '20px', color: typography.color }}>
                    {icon}
                </i>
            )}

            <ResText typography={typography} wide={false}>
                {label}
            </ResText>
        </button>
    );
};

export default ResButton;
