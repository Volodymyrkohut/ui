import React from 'react';
import { View, StyleSheet } from 'react-native';
import ArrowRight from '@components/UI/Arrows/ArrowRight.tsx';
import AppButton from '@components/UI/AppButton/AppButton.tsx';

type Props = {
    onPress: () => void;
    isLoading?: boolean;
}

const ArrowButton: React.FC<Props> = ({onPress, isLoading}) => {
    return (
       <AppButton
          variant={'filled'}
          onPress={onPress}
          style={styles.arrowButton}
          isLoading={isLoading}
          disabled={isLoading}
       >
          <ArrowRight variant={'2'} />
       </AppButton>
    );
};

const styles = StyleSheet.create({
   arrowButton: {
      width: 54,
      paddingHorizontal: 0,
      paddingVertical: 0,
      padding: 0,
      margin: 0,
      height: 54,
      justifyContent: 'center',
      alignItems: 'center',
   },
});

export default ArrowButton;
