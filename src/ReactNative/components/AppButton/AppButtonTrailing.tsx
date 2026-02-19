import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import useColors from '@hooks/useColors.ts';
import {Path, Svg} from 'react-native-svg';

type Props = {
   onPress?: () => void;
   icon?: 'plus' | 'arrow-right' | 'arrow-down' | 'arrow-up' | 'check' | 'close';
   mode?: 'light' | 'primary' | 'secondary';
}

const AppButtonTrailing: React.FC<Props> = ({onPress, icon = 'plus', mode = ''}) => {
   const colors = useColors();

   const getBgColor = () => {
      switch (mode) {
         case 'light':
            return 'rgba(230, 251, 253, 1)';
         default:
            return colors.buttons.primary.bg.default;
      }
   };

   const getSvgColor = () => {
      switch (mode) {
         case 'primary':
            return colors.labels.onDark.primary;
         default:
            return colors.buttons.primary.bg.default;
      }
   };

   const icons = {
      plus: (
         <Svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <Path
               fill={getSvgColor()}
               d="M0.134766 9.00684C0.134766 8.81315 0.181803 8.63883 0.275879 8.48389C0.369954 8.32894 0.494466 8.20443 0.649414 8.11035C0.809896 8.01628 0.984212 7.96924 1.17236 7.96924H7.9624V1.1792C7.9624 0.996582 8.00667 0.825033 8.09521 0.664551C8.18929 0.504069 8.31657 0.37679 8.47705 0.282715C8.63753 0.188639 8.80908 0.141602 8.9917 0.141602C9.18538 0.141602 9.3597 0.188639 9.51465 0.282715C9.67513 0.37679 9.80241 0.504069 9.89648 0.664551C9.99056 0.825033 10.0376 0.996582 10.0376 1.1792V7.96924H16.8193C17.013 7.96924 17.1873 8.01628 17.3423 8.11035C17.4972 8.20443 17.6217 8.32894 17.7158 8.48389C17.8099 8.63883 17.8569 8.81315 17.8569 9.00684C17.8569 9.19499 17.8099 9.3693 17.7158 9.52979C17.6217 9.68473 17.4972 9.80924 17.3423 9.90332C17.1873 9.9974 17.013 10.0444 16.8193 10.0444H10.0376V16.8262C10.0376 17.0199 9.99056 17.1942 9.89648 17.3491C9.80241 17.5041 9.67513 17.6286 9.51465 17.7227C9.3597 17.8167 9.18538 17.8638 8.9917 17.8638C8.80908 17.8638 8.63753 17.8167 8.47705 17.7227C8.31657 17.6286 8.18929 17.5041 8.09521 17.3491C8.00667 17.1942 7.9624 17.0199 7.9624 16.8262V10.0444H1.17236C0.984212 10.0444 0.809896 9.9974 0.649414 9.90332C0.494466 9.80924 0.369954 9.68473 0.275879 9.52979C0.181803 9.3693 0.134766 9.19499 0.134766 9.00684Z"
            />
         </Svg>
      ),
   };

   if (onPress) {
      return (
         <TouchableOpacity
            onPress={onPress}
            style={[styles.container, {backgroundColor: getBgColor()}]}
            activeOpacity={0.5}
         >
            {icons?.[icon]}
         </TouchableOpacity>
      );
   }

   return (
      <View style={[styles.container, {backgroundColor: getBgColor()}]}>
         {icons?.[icon]}
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      width: 44,
      height: 44,
      borderRadius: 22,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.1)',
   },
});

export default AppButtonTrailing;
