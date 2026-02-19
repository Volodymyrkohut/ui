import React, {useEffect, useRef} from 'react';
import {Animated} from 'react-native';
import useTheme from '@hooks/useTheme';
import {defaultTheme} from '@config/style/colors';
import {FontFamilyPrefix} from '@config/style/styleConfig.ts';

export enum Variants {
   largeTitle = 'largeTitle',
   title1 = 'title1',
   title2 = 'title2',
   title3 = 'title3',
   headline = 'headline',
   body = 'body',
   callout = 'callout',
   subheadline = 'subheadline',
   footnote = 'footnote',
   caption1 = 'caption1',
   caption2 = 'caption2',
}

export type TextVariant = keyof typeof Variants | 'custom';

export const TypographyConfig: Record<keyof typeof Variants, [number, number, number]> = {
   'largeTitle': [34, 41, 400],
   'title1': [28, 34, 400],
   'title2': [22, 28, 400],
   'title3': [20, 25, 400],
   'headline': [17, 22, 400],
   'body': [17, 22, 200],
   'callout': [16, 21, 400],
   'subheadline': [15, 20, 300],
   'footnote': [13, 18, 300],
   'caption1': [12, 16, 300],
   'caption2': [11, 13, 300],
};

export type AppTextProps = {
   color?: ((colors: typeof defaultTheme) => string | any) | string,
   text?: string | number
   style?: any,
   weight?: 300 | 400 | 500 | 600 | 700 | 800 | string,
   variant: TextVariant,
   align?: 'left' | 'center' | 'right',
   children?: React.ReactNode,
   numberOfLines?: number,
   onPress?: () => void,
   adjustsFontSizeToFit?: boolean,
   emphasized?: boolean,
   italic?: boolean,
   secondaryColor?: boolean,
   animated?: boolean,
   animationDuration?: number,
}

const getFontFamilyByWeight = (weight?: string | number = '', italic: boolean = false): string => {
   const weightString = typeof weight === 'number' ? weight.toString() : weight;

   switch (weightString) {
      case '100':
      case '200':
         return 'ExtraLight';
      case '300':
         return 'Light';
      case '400':
         return 'Regular';
      case '500':
         return 'Medium';
      case '600':
         return 'SemiBold';
      case '700':
      case '800':
         return 'Bold';
      default:
         return 'Regular';
   }
};

const Typography: React.FC<AppTextProps> = (props) => {
   const {
      children,
      variant,
      color,
      text,
      numberOfLines,
      style,
      align = 'left',
      adjustsFontSizeToFit,
      weight,
      emphasized = false,
      italic = false,
      animated = false,
      animationDuration = 300,
      secondaryColor,
      ...rest
   } = props;

   const {colors} = useTheme();
   const animatedColorValue = useRef(new Animated.Value(0)).current;
   const previousColor = useRef<string | null>(null);

   const getDefaultTextColor = () => {
      if (secondaryColor) return colors.labels.onLight.secondary;
      return colors.text;
   };

   const staticColor = style?.color || (typeof color === 'function' ? color(colors) : color) || getDefaultTextColor();

   useEffect(() => {
      if (animated) {
         if (previousColor.current === null) {
            previousColor.current = staticColor;
         } else if (previousColor.current !== staticColor) {
            animatedColorValue.setValue(0);
            Animated.timing(animatedColorValue, {
               toValue: 1,
               duration: animationDuration,
               useNativeDriver: false,
            }).start(() => {
               previousColor.current = staticColor;
            });
         }
      }
   }, [staticColor, animated, animationDuration]);

   let textColor;
   if (animated && previousColor.current && previousColor.current !== staticColor) {
      textColor = animatedColorValue.interpolate({
         inputRange: [0, 1],
         outputRange: [previousColor.current, staticColor],
      });
   } else {
      textColor = staticColor;
      if (animated && previousColor.current === null) {
         previousColor.current = staticColor;
      }
   }

   let fontWeight = weight || style?.fontWeight || TypographyConfig?.[variant]?.[2];

   if (emphasized && !weight && !style?.fontWeight) {
      const baseWeight = TypographyConfig?.[variant]?.[2];
      if (baseWeight === 200) fontWeight = 400;
      else if (baseWeight === 300) fontWeight = 500;
      else if (baseWeight === 400) fontWeight = 600;
      else if (baseWeight === 500) fontWeight = 600;
      else fontWeight = baseWeight;
   }

   const baseStyle = {
      fontSize: TypographyConfig?.[variant]?.[0],
      lineHeight: TypographyConfig?.[variant]?.[1],
      fontWeight,
      fontFamily: `${FontFamilyPrefix}${getFontFamilyByWeight(fontWeight, italic)}`,
   };

   return (
      <Animated.Text
         allowFontScaling={false}
         numberOfLines={props.numberOfLines}
         includeFontPadding={false}
         style={[
            baseStyle,
            style,
            {color: textColor, textAlign: align},
         ]}
         lineBreakMode={'middle'}
         adjustsFontSizeToFit={adjustsFontSizeToFit}
         minimumFontScale={0.8}
         {...rest}
      >
         {typeof text !== 'undefined' ? text : children}
      </Animated.Text>
   );
};

export default Typography;
