import { Colors } from '@config/style/colors';

const primary99 = '#E8F3E6';
const primary60 = '#327B2B';

export const summerColorTheme: Partial<Colors> = {
    primary: '#3E9A36',
    outlineVariant: '#B3BAC5',
    surfaceTint: '#2F753A',
    secondary50: '#307A38',
    primary60,
    primary99,
    tabBar: {
        logoFillColor: '#3E9A36',
        iconFillColorOpen: primary99,
        iconContentFillColorOpen: primary60,
    },
}

export const summerInfoMenu = {
    summer: {
        activeTabBackground: primary60,
        background: '#3E9A36',
        textColor: '#C2DFBF',
        phoneColor: '#C2DFBF',
        infoMenuOpenBackground: '#3E9A36',
        infoMenuOpenColor: '#AFD5AC',
    }
}
