import React from 'react';
import { StyleSheet } from 'react-native';
import { COLOR_SECOND } from '../../../config/style';
import AppButton from './AppButton.tsx';

type Props = {
    onPress: () => void;
    style?: any;
    children: any;
};

const LinearTextButton: React.FC<Props> = ({children, style, onPress}) => {
    return (
        <AppButton variant={'text'} style={style} onPress={onPress}>
            {children}
        </AppButton>
    );
};

const styles = StyleSheet.create({
    text: {
        fontSize: 13,
        fontWeight: '500',
        lineHeight: 16,
        color: COLOR_SECOND,
    },
});

export default LinearTextButton;
