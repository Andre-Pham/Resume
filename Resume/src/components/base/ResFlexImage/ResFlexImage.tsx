import React, { useEffect, useState } from 'react';
import { Image, ImageResizeMode, ImageStyle, StyleSheet, View, ViewStyle } from 'react-native';
import { UnreachableCaseError } from '../../../language/errors/UnreachableCaseError';

interface Props {
    fileName: string;
    flexVertical: boolean;
    style?: ImageStyle;
}

const ResFlexImage: React.FC<Props> = ({ 
    fileName,
    flexVertical,
    style,
}) => {
    return (
        <Image
            source={require('/assets/images/' + fileName)}
            resizeMode="contain"
            style={{
                height: flexVertical ? "100%" : null,
                width: flexVertical ? null : "100%",
                aspectRatio: 1,
                ...style,
            }}
        />
      );
}

export default ResFlexImage;