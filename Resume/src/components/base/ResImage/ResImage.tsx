import React, { useEffect, useState } from 'react';
import { Image, ImageResizeMode, ImageStyle, View, ViewStyle } from 'react-native';
import { ResImageScale } from './ResImageScale';
import { UnreachableCaseError } from '../../../language/errors/UnreachableCaseError';

interface Props {
    fileName: string;
    width?: number;
    height?: number;
    scale?: ResImageScale;
    style?: ImageStyle;
}

const ResImage: React.FC<Props> = ({ 
    fileName,
    width = 0,
    height = 0,
    scale = ResImageScale.none,
    style,
}) => {
    const [size, setSize] = useState({ width: width, height: height });
    const [resizeMode, setResizeMode] = useState<ImageResizeMode>(null);
    const [imageSize, setImageSize] = useState({ 
        // Don't set these to 0, causes NaN issues
        width: 1, height: 1,
    });

    useEffect(() => {
        const imagePath = require('/assets/images/' + fileName); // Replace with the actual path to your image
        Image.getSize(imagePath, (width, height) => {
            setImageSize({ width: width, height: height });
        }, (error) => {
            console.log('Error getting image dimensions:', error);
        });

        if (scale == ResImageScale.scaleToFill) {
            if (width > height) {
                setSize({ width: width, height: undefined })
            } else {
                setSize({ width: imageSize.width*height/imageSize.height, height: undefined });
            }
        }
    }, []);

    useEffect(() => {
        switch (scale) {
            case ResImageScale.none:
                setResizeMode("stretch");
                break;
            case ResImageScale.scaleToFit:
                setResizeMode("contain");
                break;
            case ResImageScale.scaleToFill:
                setResizeMode("cover");
                break;
            case ResImageScale.scaleToFillCrop:
                setResizeMode("cover");
                break;
            default:
                throw new UnreachableCaseError(scale);
        }
    }, []);

    return (
        <Image
            source={require('/assets/images/' + fileName)}
            resizeMode={resizeMode}
            style={{
                width: size.width,
                height: size.height,
                aspectRatio: scale == ResImageScale.none ? null : 1,
                ...style
            }}
        />
    );
}

export default ResImage;