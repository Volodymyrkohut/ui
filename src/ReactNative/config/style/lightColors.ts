export const lightColors = {
   backgrounds: {
      accent: {
         neutral: '#F4FCFF',
         primary: '#F5FDFE',
         secondary: '#ECEEFF',
         tertiary: '#FBF3FE',
      },
      primary: {
         default: '#FFFFFF',
         elevated: '#FFFFFF',
      },
      secondary: {
         default: '#F2F2F7',
         elevated: '#F2F2F7',
      },
      tertiary: {
         default: '#FFFFFF',
         elevated: '#FFFFFF',
      },
   },
   backgroundsGrouped: {
      accent: {
         neutral: '#F4FCFF',
         primary: '#F5FDFE',
         secondary: '#F6F5FE',
         tertiary: '#FBF3FE',
         blue: 'rgba(239, 243, 255, 1)',
         alt: '#fff'
      },
      error: '#FFF2F7',
      primary: {
         default: '#F2F2F7',
         elevated: '#F2F2F7',
      },
      secondary: {
         default: '#FFFFFF',
         elevated: '#FFFFFF',
      },
      tertiary: {
         default: '#F2F2F7',
         elevated: '#F2F2F7',
      },
   },
   buttons: {
      destructive: {
         bg: {
            alt: 'rgba(255, 56, 60, 0.14)',
            default: 'rgba(255, 56, 60, 0.2)',
         },
         border: {
            default: 'rgba(255, 56, 60, 1)',
         },
         label: {
            default: 'rgba(255, 56, 60, 1)',
            disabled: 'rgba(255, 56, 60, 0.5)',
         },
      },
      disabled: {
         bg: {
            default: '#EBEBEF',
         },
         border: {
            default: 'rgba(118, 118, 128, 0.12)',
         },
         label: {
            default: 'rgba(60, 60, 67, 0.3)',
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
            default: '#00C3D0',
         },
         border: {
            default: '#00C3D0',
         },
         label: {
            default: '#000000',
         },
      },
   },
   fills: {
      primary: 'rgba(120, 120, 120, 0.2)',
      secondary: 'rgba(120, 120, 128, 0.16)',
      tertiary: 'rgba(118, 118, 128, 0.12)',
      quaternary: 'rgba(116, 116, 128, 0.08)',

      vibrant: {
         primary: 'rgba(204, 204, 204, 1)',
         quaternary: 'rgba(242, 242, 247, 1)',
         secondary: 'rgba(224, 224, 224, 1)',
         tertiary: 'rgba(230, 230, 230, 1)',
      },
   },

   labels: {
      onLight: {
         primary: '#000000',
         secondary: 'rgba(60, 60, 67, 0.6)',
         tertiary: 'rgba(60, 60, 67, 0.3)',
         quaternary: 'rgba(60, 60, 67, 0.18)',
         disabled: '#BDBDBD',
      },
      onDark: {
         primary: '#FFFFFF',
         quaternary: '#FFFFFF54',
         //secondary: '#3C3C4399',
         secondary: '#FFFFFFB2',
         tertiary: '#3C3C434D',
         disabled: '#EBEBF54D',
      },
      vibrant: {
         primary: '#333333',
         secondary: '#999999',
         tertiary: '#BFBFBF',
         quaternary: '#D9D9D9',
      },
      vibrantControls: {
         primary: '#404040',
         secondary: '#8C8C8C',
         tertiary: '#D9D9D9',
      },
   },

   // States (Light theme)
   states: {
      success: {
         bg: '#E8F5E9',
         content: '#2E7D32',
         border: '#4CAF50',
      },
      warning: {
         bg: '#FFF3E0',
         content: '#E65100',
         border: '#FF9800',
      },
      error: {
         bg: '#FFEBEE',
         content: '#C62828',
         border: '#F44336',
      },
      info: {
         bg: '#E3F2FD',
         content: '#1565C0',
         border: '#2196F3',
      },
   },

   // Semantic colors (Light theme)
   semantic: {
      brand: {
         primary: '#00C3D0',
         secondary: '#143850',
      },
      success: '#4CAF50',
      warning: '#FF9800',
      error: '#F44336',
      info: '#2196F3',
   },

   gradients: {
      surface: {
         accentNeutral: '#6B5DFF12',
         accentPink: '#FFF2F7',
         accentPrimary: '#00C3D01A',
         accentSecondary: '#6B5DFF1A',
         accentTeal: '#E6FBFD',
         accentBlue150: 'rgba(194, 209, 246, 1)',
         accentTertiary: '#E5F3FF',
         accentIndigo150: 'rgba(225, 223, 242, 1)',
         accentIndigo650: '#6B5DFF',
         accentIndigo850: '#403899',
         accentQuaternary: '#ECF5FE',
         primary: '#FFE5E7',
         quaternary: '#74748014',
         secondary: '#78788029',
         tertiary: '#7676801F',
      },
   },

   // Miscellaneous (Light theme)
   misc: {
      alert: {
         overlay: '#29293A3B',
      },
      segmentedControl: {
         selectedFill: '#FFFFFF',
      },
      tabUnselected: '#999999',
      tabBarSelection: '#00C3D0',
      windowGrabber: '#000000',
   },

   // Overlays (Light theme)
   overlays: {
      activityViewController: '#00000033',
      default: '#00000033',
   },

   // Separators (Light theme)
   separators: {
      nonOpaque: '#0000001F',
      opaque: '#C7C7CC',
      vibrant: '#E6E6E6',
   },

   // Sidebar (Light theme)
   sidebar: {
      fillSelected: '#FFFFFF',
      shadowDragOver: '#00000033',
      textSelected: '#00C3D0',
   },

   // TextField (Light theme)
   textField: {
      bg: '#FFFFFF',
      outline: '#3C3C434A',
   },
   calendar: {
      selectedDayBg: '#E6FBFD',
   }
}
