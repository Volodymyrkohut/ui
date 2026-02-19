import {lightColors} from '@config/style/lightColors.ts';

export const darkColors = {
   // Buttons (Dark theme)
   buttons: {
      destructive: {
         bg: {
            alt: '#FF424524',
            default: '#FF424533',
         },
         border: {
            default: '#E9152D',
         },
         label: {
            default: '#FF383C',
            disabled: '#FF383C80',
         },
      },
      disabled: {
         bg: {
            default: '#141414',
         },
         border: {
            default: '#7676801F',
         },
         label: {
            default: '#EBEBF54D',
         },
      },
      onFill: {
         label: {
            default: '#FFFFFF',
            disabled: '#FFFFFF4A',
         },
      },
      primary: {
         bg: {
            default: '#00C0E8',
         },
         border: {
            default: '#00C3D0',
         },
         label: {
            default: '#FFFFFF',
         },
      },
   },

// Backgrounds (Dark theme)
   backgrounds: {
      accent: {
         neutral: '#143850',
         primary: '#163D45',
         secondary: '#201E62',
         tertiary: '#441753',
      },
      primary: {
         default: '#000000',
         elevated: '#121212',
      },
      secondary: {
         default: '#1A1A1A',
         elevated: '#141414',
      },
      tertiary: {
         default: '#141414',
         elevated: '#1C1C1E',
      },
   },

   backgroundsGrouped: {
      accent: {
         neutral: '#143850',
         primary: '#163D45',
         secondary: '#201E62',
         tertiary: '#441753',
         blue: '#123976',
         alt: '#223359'
      },
      error: '#FF2D5533',
      primary: {
         default: '#000000',
         elevated: '#121212',
      },
      secondary: {
         default: '#121212',
         elevated: '#141414',
      },
      tertiary: {
         default: '#141414',
         elevated: '#1C1C1E',
      },
   },

// Labels (Text) - Dark theme
   labels: {
      onDark: {
         primary: '#FFFFFF',
         quaternary: '#FFFFFF21',
         secondary: '#FFFFFFB3',
         tertiary: '#FFFFFF80',
         disabled: '#757575',
      },
      onLight: {
         primary: '#ffffff',
         quaternary: '#EBEBF529',
         secondary: '#EBEBF58C',
         tertiary: '#EBEBF54D',
         disabled: '#EBEBF54D',
      },
      vibrant: {
         primary: '#FFFFFF',
         quaternary: '#262626',
         secondary: '#999999',
         tertiary: '#404040',
      },
      vibrantControls: {
         primary: '#BFBFBF',
         secondary: '#737373',
         tertiary: '#262626',
      },
      onColor: {
         primary: '#FFFFFF',
         secondary: 'rgba(255, 255, 255, 0.87)',
         tertiary: 'rgba(255, 255, 255, 0.6)',
         disabled: 'rgba(255, 255, 255, 0.38)',
      },
   },

// Icons (Dark theme)
   icons: {
      onDark: {
         primary: '#FFFFFF',
         secondary: '#E0E0E0',
         tertiary: '#BDBDBD',
         disabled: '#757575',
      },
      onColor: {
         primary: '#FFFFFF',
         secondary: 'rgba(255, 255, 255, 0.87)',
         disabled: 'rgba(255, 255, 255, 0.38)',
      },
   },

// Fills (Dark theme)
   fills: {
      primary: '#7878805C',
      quaternary: '#74748029',
      secondary: '#78788052',
      tertiary: '#7676803D',
      vibrant: {
         primary: '#333333',
         quaternary: '#1A1A1A',
         secondary: '#1F1F1F',
         tertiary: '#121212',
      },
      subtle: {
         primary: '#15405E',
         secondary: '#143850',
         tertiary: '#0D274A',
         quaternary: '#0b284a',
      },
      neutral: {
         50: '#212121',
         100: '#424242',
         200: '#616161',
         300: '#757575',
         400: '#9E9E9E',
         500: '#BDBDBD',
         600: '#E0E0E0',
         700: '#EEEEEE',
         800: '#F5F5F5',
         900: '#FAFAFA',
      },
   },

// Strokes (Borders) - Dark theme
   strokes: {
      primary: '#424242',
      secondary: '#616161',
      tertiary: '#757575',
      accent: {
         primary: '#00C3D0',
         secondary: '#F4FCFF',
      },
   },

// States (Dark theme)
   states: {
      success: {
         bg: 'rgba(46, 125, 50, 0.2)',
         content: '#81C784',
         border: '#4CAF50',
      },
      warning: {
         bg: 'rgba(230, 81, 0, 0.2)',
         content: '#FFB74D',
         border: '#FF9800',
      },
      error: {
         bg: 'rgba(198, 40, 40, 0.2)',
         content: '#E57373',
         border: '#F44336',
      },
      info: {
         bg: 'rgba(21, 101, 192, 0.2)',
         content: '#64B5F6',
         border: '#2196F3',
      },
   },

// Semantic colors (Dark theme)
   semantic: {
      brand: {
         primary: '#00C3D0',
         secondary: '#F4FCFF',
      },
      success: '#4CAF50',
      warning: '#FF9800',
      error: '#F44336',
      info: '#2196F3',
   },

   gradients: {
      surface: {
         accentNeutral: '#6B5DFF33',
         accentPink: '#FF2D551A',
         accentPrimary: '#00C3D01A',
         accentSecondary: '#6B5DFF33',
         accentTeal: '#00C3D033',
         accentTertiary: '#0088FF33',
         accentBlue150: 'rgba(18, 57, 118, 1)',
         accentIndigo150: 'rgba(64, 56, 153, 1)',
         accentIndigo650: '#6B5DFF',
         accentIndigo850: '#403899',
         accentQuaternary: '#0088FF26',
         primary: '#7878805C',
         quaternary: '#74748029',
         secondary: '#78788052',
         tertiary: '#7676803D',
      },
   },

// Miscellaneous (Dark theme)
   misc: {
      alert: {
         overlay: '#12121289',
      },
      segmentedControl: {
         selectedFill: '#7E7E7E',
      },
      tabUnselected: '#999999',
      tabBarSelection: '#00C3D0',
      windowGrabber: '#FFFFFF',
   },

// Overlays (Dark theme)
   overlays: {
      activityViewController: '#0000004A',
      default: '#0000007A',
   },

// Separators (Dark theme)
   separators: {
      nonOpaque: '#FFFFFF2B',
      opaque: '#38383A',
      vibrant: '#1A1A1A',
   },

// Sidebar (Dark theme)
   sidebar: {
      fillSelected: '#8E8E9340',
      shadowDragOver: '#000000E6',
      textSelected: '#FFFFFF',
   },

// TextField (Dark theme)
   textField: {
      bg: '#000000',
      outline: '#EBEBF54D',
   },
   calendar: {
      selectedDayBg: '#00272A',
   }
} as typeof lightColors;
