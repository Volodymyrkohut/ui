import React from 'react';
import {StyleSheet, TouchableOpacity, View, ActivityIndicator} from 'react-native';
import useTheme from '@hooks/useTheme';
import {Colors} from '@config/style/colors';
import {spacing} from '@config/style/styleConfig';
import Row from '@components/UI/Layout/Row';
import AppText from '@components/UI/Texts/AppText.tsx';
import {AppButtonIcon} from './components';

type ButtonVariant =
   'default' |
   'outlined'
   | 'outlined-danger'
   | 'text'
   | 'filled'
   | 'secondary'
   | 'destructive'
   | 'destructive-secondary'
   | 'destructive-outlined';

type ButtonSize = 'small' | 'medium' | 'large';

type Props = {
   fill?: string;
   isLoading?: boolean;
   size?: ButtonSize,
   disabled?: boolean,
   onPress?: () => void,
   variant?: ButtonVariant,
   textStyle?: any,
   style?: any,
   children?: any
   iconBefore?: 'plus' | 'document' | React.ReactNode | string
   // Accessibility props
   accessibilityLabel?: string;
   accessibilityHint?: string;
}

const getButtonSize = (size: ButtonSize) => {
   switch (size) {
      case 'small':
         return 26;

      case 'medium':
         return 34;
   }

   return 50;
};

const getStylesForButtonAndTextByVariant = (variant: ButtonVariant = 'filled', size: ButtonSize, colors: Colors, fill: string, isDisabled: boolean) => {
   const getFontSizeByButtonSize = () => {
      if (size === 'small') return 13;
      return 17;

   };

   const textStyle: any = {
      fontSize: getFontSizeByButtonSize(),
      fontWeight: '400',
   };

   const buttonStyle: any = {};

   switch (variant) {
      case 'default':
      case 'filled':
         textStyle.color = colors.onPrimary;
         buttonStyle.backgroundColor = fill || colors.primary;

         if (isDisabled) {
            textStyle.color = colors.buttons.disabled.label.default;
            buttonStyle.backgroundColor = colors.buttons.disabled.border.default;
         }

         break;

      case 'outlined':
         textStyle.color = fill || colors.primary;
         buttonStyle.backgroundColor = 'transparent';
         buttonStyle.borderWidth = 1;
         buttonStyle.borderColor = fill || colors.primary;
         break;

      case 'secondary':
         // textStyle.color = fill || colors.buttons.primary.bg.default;
         // buttonStyle.backgroundColor = 'rgba(0, 195, 208, 0.2)';
         //Buttons/Primary/Label/Default
         textStyle.color = fill || colors.buttons.primary.label.default;
         buttonStyle.backgroundColor = colors.buttons.disabled.border.default;
         break;

      case 'text':
         textStyle.color = fill || colors.primary;
         buttonStyle.backgroundColor = 'transparent';
         break;

      case 'destructive':
         textStyle.color = colors.buttons.onFill.label.default;
         buttonStyle.backgroundColor = colors.buttons.destructive.label.default;

         if (isDisabled) {
            textStyle.color = colors.buttons.destructive.label.disabled;
            buttonStyle.backgroundColor = colors.buttons.destructive.bg.alt;
         }

         break;

      case 'outlined-danger':
      case 'destructive-secondary':
         textStyle.color = colors.buttons.destructive.label.default;
         buttonStyle.backgroundColor = colors.buttons.destructive.bg.default;

         if (isDisabled) {
            textStyle.color = colors.buttons.destructive.label.disabled;
            buttonStyle.backgroundColor = colors.buttons.destructive.bg.alt;
         }

         break;

      case 'destructive-outlined':
         textStyle.color = colors.buttons.destructive.label.default;
         //buttonStyle.backgroundColor = 'transparent';
         buttonStyle.borderWidth = 1;
         buttonStyle.borderColor = colors.buttons.destructive.bg.alt;

   }

   return {
      textStyle,
      buttonStyle,
   };
};

const AppButton: React.FC<Props> = (props) => {
   const {colors} = useTheme();
   const {
      disabled,
      children,
      style,
      onPress,
      iconBefore,
      size = 'large',
      variant = 'default',
      fill = false,
      accessibilityLabel,
      accessibilityHint,
   } = props;

   const {
      textStyle,
      buttonStyle,
   } = getStylesForButtonAndTextByVariant(variant, size, colors, fill, disabled || props.isLoading);

   const getAccessibilityLabel = () => {
      if (accessibilityLabel) return accessibilityLabel;
      if (typeof children === 'string') return children;
      if (typeof children === 'number') return children.toString();
      return 'Button'; // Fallback
   };

   return (
      <TouchableOpacity
         onPress={!disabled && !props.isLoading && onPress ? onPress : () => {}}
         disabled={disabled}
         accessible={true}
         accessibilityRole="button"
         accessibilityLabel={getAccessibilityLabel()}
         accessibilityHint={accessibilityHint}
         accessibilityState={{
            disabled: disabled || false,
            busy: props.isLoading || false,
         }}
         style={[
            buttonStyle,
            {
               height: getButtonSize(size),
               maxHeight: '100%',
            },
            styles.button,
            variant === 'text' && styles.textButton,
            style,
         ]}
      >
         <Row>
            {props.isLoading && <ActivityIndicator color={textStyle?.color} style={{marginRight: spacing}} />}

            {typeof iconBefore !== 'undefined' && (
               <View style={{marginRight: spacing}}>
                  <AppButtonIcon icon={iconBefore} fill={textStyle?.color} />
               </View>
            )}

            {
               typeof children === 'string' || typeof children === 'number'
                  ? <AppText style={[textStyle, props.textStyle]}>{children}</AppText> : children
            }
         </Row>
      </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
   button: {
      //minWidth: 130,
      borderRadius: 60,
      alignItems: 'center',
      justifyContent: 'center',
      paddingHorizontal: spacing * 2,
   },
   text: {
      color: '#fff',
   },
   textButton: {
      margin: 0,
      height: 'auto',
      minWidth: 0,
      paddingHorizontal: 0,
      width: 'auto',
      padding: 0,
   },
});

export default AppButton;
