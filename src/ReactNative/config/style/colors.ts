import {merge} from 'lodash';
import {isSummer} from '@config/app';
import {summerColorTheme, summerInfoMenu} from '@config/style/season-themes/summer-theme';
import accentColors from '@config/style/accentColors.ts';
import {lightColors} from '@config/style/lightColors.ts';
import {darkColors} from '@config/style/darkColors.ts';

const colorSystem = {
   light: lightColors,
   dark: darkColors,
};

// Legacy colors для зворотної сумісності
const colors = {
   PRIMARY: colorSystem.light.backgrounds.accent.neutral,
};

const commonColor = {
   brandColor: '#EE003B',

   // Нейтральні кольори (legacy)
   neutralVariant: '#F4F5F7',
   neutralVariant10: '#091E42',
   neutralVariant20: '#172B4D',
   neutralVariant30: '#344563',
   neutralVariant80: '#B3BAC5',
   neutralVariant99: '#F4F5F7',
   neutralVariant95: '#DFE1E6',

   default: {
      primary: colors.PRIMARY,
      G1000: 'rgba(105, 211, 128, 1)',
      error50: 'rgba(222, 55, 48, 1)',
   },
   extended: {
      brandColorTone50: '#E5153E',
      brandColorTone35: '#A80027',
      brandColorTone30: '#920021',
      brandColorTone60: '#BF002E',
      brandColorTone90: '#FFDAD9',
   },
};

const infoMenu = {
   summer: {
      background: 'rgba(191, 0, 46, 1)',
      activeTabBackground: commonColor.extended.brandColorTone35,
      textColor: commonColor.extended.brandColorTone90,
      phoneColor: commonColor.extended.brandColorTone90,
      infoMenuOpenBackground: commonColor.extended.brandColorTone30,
      infoMenuOpenColor: commonColor.extended.brandColorTone50,
   },
   winter: {
      background: colorSystem.dark.backgrounds.accent.neutral,
      activeTabBackground: commonColor.neutralVariant10,
      textColor: commonColor.neutralVariant80,
      phoneColor: '#D4E3FF',
      infoMenuOpenBackground: colorSystem.dark.backgrounds.accent.neutral,
      infoMenuOpenColor: colorSystem.light.buttons.primary.bg.default,
   },
};

let baseColors = {
   ...commonColor,
   accent: accentColors,
   windowColors: {
      minimize: 'rgba(254, 188, 47, 1)'
   },
   infoMenu,
};

const lightTheme = colorSystem.light;
const lightSurface = '';

let defaultTheme = {
   text: lightTheme.labels.onLight.primary,
   // Нова система кольорів для світлої теми
   buttons: lightTheme.buttons,
   backgrounds: lightTheme.backgrounds,
   backgroundsGrouped: lightTheme.backgroundsGrouped,
   labels: lightTheme.labels,
   icons: '',
   fills: lightTheme.fills,
   strokes: '',
   states: lightTheme.states,
   semantic: lightTheme.semantic,
   gradients: lightTheme.gradients,
   misc: lightTheme.misc,
   overlays: lightTheme.overlays,
   separators: lightTheme.separators,
   sidebar: lightTheme.sidebar,
   textField: lightTheme.textField,

   tabBar: {
      border: '',
      background: lightSurface,
      logoFillColor: commonColor.extended.brandColorTone50,
      iconFillColor: colorSystem.dark.backgrounds.accent.neutral,
      iconFillColorOpen: 'rgba(238, 0, 59, 0.2)',
      iconContentFillColorOpen: 'rgba(255, 136, 139, 1)',
   },
   headers: {
      primaryHeaderColor: colorSystem.dark.backgrounds.accent.neutral,
      homeLogoFill: commonColor.brandColor,
   },
   borders: {
      separator: '',
   },
   pageBackground: lightTheme?.backgrounds?.primary?.default,
   pageBackgroundTransparent: 'rgba(255,255,255,0)',
   background2: '',

   // Primary кольори
   primary: lightTheme.buttons.primary.bg.default,
   onPrimary: lightTheme.buttons.onFill.label.default,

   secondary: '#00687B',
   secondaryContainer: 'rgba(174, 236, 255, 1)',
   tetriary: '#4C5F7C',
   error: lightTheme.semantic.error,
   errorContainer: lightTheme.states.error.bg,
   errorOpacity08: 'rgba(179, 38, 30, 0.08)',
   surface: '',
   surface1: '',
   surface2: '',
   surface3: '',
   surfaceTint: lightTheme.buttons.primary.bg.default,
   surfaceVariant: lightTheme.fills.vibrant.primary,
   onSurface: lightTheme.labels.onLight.primary,
   onSurfaceDisabled: lightTheme.labels.onLight.disabled,
   onSurfaceVariant: lightTheme.labels.onDark.secondary,
   outline: '',
   outlineVariant: '',
   inverseOnSurface: lightTheme.backgrounds.accent.primary,
   onTertiaryContainer: colorSystem.dark.backgrounds.accent.neutral,
   surfaceTintColorOpacity008: 'rgba(20, 56, 80, 0.08)',
   ...baseColors,
   sys: {
      bg: lightTheme.backgrounds.accent.neutral,
      background2: '',
      overlay: lightTheme.overlays.default,
      iconBg: lightTheme.fills.tertiary,
   },
   weather: {
      overlay: 'rgba(255, 255, 255, 0.5)',
      day1: '#D4E3FF',
      day2: 'rgba(179, 200, 233, 1)',


      cellBackground: lightTheme.backgroundsGrouped.secondary.default,
      panelBackground: 'rgba(255, 255, 255, 0.5)',
      cellBorder: '',

      partBackgroundMorning: 'rgba(241, 255, 254, 1)',
      partBackgroundMiddle: 'rgba(217, 246, 255, 1)',
      partBackgroundNight: 'rgba(174, 236, 255, 1)',

      iconBackgroundMorning: 'rgba(212, 227, 255, 1)',
      iconBackgroundMiddle: 'rgba(179, 200, 233, 1)',
      iconBackgroundNight: 'rgba(126, 146, 177, 1)',
      imageOpacity: 1,
   },
   extended: {
      ...commonColor.extended,
      brandColor: '#BF002E',
      infoMenuBackground: colorSystem.dark.backgrounds.accent.neutral,
      infoPagesListBackground: '',
      imageBackground: lightTheme.fills.vibrant.primary,
      paymentMethodsBackground: '',
   },
   noResultsImageColors: {
      color1: lightTheme.fills.vibrant.secondary,
      color2: lightTheme.fills.vibrant.primary,
   },
   stateLayers: {
      tetriaryContainer: {
         opacity16: 'rgba(20, 56, 80, 0.16)',
      },
   },
   calendar: lightTheme.calendar
};

if (isSummer) {
   defaultTheme = merge(defaultTheme, summerColorTheme, {infoMenu: summerInfoMenu});
}

const light = defaultTheme;

const darkTheme = colorSystem.dark;
const darkSurface = darkTheme.backgrounds.accent.neutral;

export type Colors = typeof defaultTheme;

const dark: typeof defaultTheme = {
   ...baseColors,
   text: darkTheme.labels.onDark.primary,

   // Нова система кольорів для темної теми
   buttons: darkTheme.buttons,
   backgrounds: darkTheme.backgrounds,
   backgroundsGrouped: darkTheme.backgroundsGrouped,
   labels: darkTheme.labels,
   icons: darkTheme.icons,
   fills: darkTheme.fills,
   strokes: darkTheme.strokes,
   states: darkTheme.states,
   semantic: darkTheme.semantic,
   misc: darkTheme.misc,
   overlays: darkTheme.overlays,
   separators: darkTheme.separators,
   sidebar: darkTheme.sidebar,
   textField: darkTheme.textField,
   gradients: darkTheme.gradients,

   tabBar: {
      border: darkTheme.strokes.primary,
      background: darkSurface,
      iconFillColor: '#fff',
      logoFillColor: commonColor.extended.brandColorTone50,
      iconFillColorOpen: 'rgba(238, 0, 59, 0.2)',
      iconContentFillColorOpen: 'rgba(255, 136, 139, 1)',
   },
   headers: {
      primaryHeaderColor: darkSurface,
      homeLogoFill: '#fff',
   },
   borders: {
      separator: 'rgba(255, 255, 255, 0.12)',
   },
   pageBackground: '#000',
   pageBackgroundTransparent: 'rgba(255,255,255,0)',
   background2: darkTheme.backgrounds.secondary.default,
   primary: darkTheme.buttons.primary.bg.default,
   onPrimary: darkTheme.backgrounds.accent.neutral,
   secondary: '#56D6F5',
   secondaryContainer: 'rgba(0, 78, 93, 1)',
   tetriary: '#B3C8E9',
   error: '#FFB4AB',
   errorContainer: 'rgba(147, 0, 10, 1)',
   errorOpacity08: 'rgba(242, 184, 181, 0.08)',
   surface: darkSurface,
   surface1: darkTheme.backgrounds.tertiary.default,
   surface2: darkTheme.backgrounds.secondary.default,
   surface3: 'rgba(0, 195, 208, 0.11)',
   surfaceVariant: darkTheme.strokes.primary,
   surfaceTint: darkTheme.buttons.primary.bg.default,
   onSurface: darkTheme.labels.onDark.primary,
   onSurfaceDisabled: darkTheme.labels.onDark.disabled,
   onSurfaceVariant: darkTheme.labels.onDark.secondary,
   outline: darkTheme.fills.neutral[300],
   outlineVariant: darkTheme.strokes.primary,
   inverseOnSurface: darkTheme.backgrounds.accent.neutral,
   onTertiaryContainer: lightTheme.backgrounds.accent.neutral,
   surfaceTintColorOpacity008: 'rgba(208, 188, 255, 0.08)',
   sys: {
      bg: darkTheme.backgrounds.accent.neutral,
      background2: darkTheme.backgrounds.secondary.default,
      overlay: darkTheme.overlays.default,
      iconBg: darkTheme.fills.subtle.primary,
   },
   weather: {
      overlay: 'rgba(20, 56, 80, 0.5)',
      day1: 'rgba(76, 95, 124, 1)',
      day2: 'rgba(52, 72, 99, 1)',
      cellBackground: darkTheme.backgrounds.accent.neutral,
      panelBackground: 'rgba(20, 56, 80, 0.5)',
      cellBorder: 'rgba(16, 51, 83, 1)',

      partBackgroundMorning: 'rgba(0, 158, 186, 1)',
      partBackgroundMiddle: 'rgba(0, 130, 154, 1)',
      partBackgroundNight: 'rgba(0, 104, 123, 1)',

      iconBackgroundMorning: 'rgba(76, 95, 124, 1)',
      iconBackgroundMiddle: 'rgba(52, 72, 99, 1)',
      iconBackgroundNight: 'rgba(29, 49, 75, 1)',
      imageOpacity: 0.4,
   },
   extended: {
      ...commonColor.extended,
      brandColor: '#FFB3B3',
      infoMenuBackground: darkTheme.backgrounds.accent.neutral,
      infoPagesListBackground: darkTheme.backgrounds.tertiary.elevated,
      imageBackground: darkTheme.fills.subtle.primary,
      paymentMethodsBackground: darkSurface,
   },
   noResultsImageColors: {
      color1: '#103353',
      color2: darkTheme.backgrounds.accent.neutral,
   },
   stateLayers: {
      tetriaryContainer: {
         opacity16: 'rgba(52, 72, 99, 0.16)',
      },
   },
   calendar: darkTheme.calendar
};

export {light, dark, defaultTheme};

export const getColorsByTheme = (theme: string) => {
   return theme === 'dark' ? dark : light;
};

export default colors;
