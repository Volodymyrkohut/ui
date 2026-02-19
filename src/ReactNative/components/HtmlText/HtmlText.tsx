import React from 'react';
import {View, Linking, Dimensions} from 'react-native';
import RenderHTML from 'react-native-render-html';
import TableRenderer, {cssRulesFromSpecs, defaultTableStylesSpecs, tableModel} from '@native-html/table-plugin';
import WebView from 'react-native-webview';

import PropTypes from 'prop-types';
//import { _constructStyles } from 'react-native-render-html/src/HTMLStyles';
import AppText from '../Texts/AppText';
import {COLOR_SECOND, isAndroid, isIos} from '@config/style';
import URL from 'url-parse';
import {
   CLUB_CARD_TYPE,
   HIRE_TYPE,
   HOTELS_TYPE,
   INFO_DISCOUNT_TYPE,
   INFO_EVENTS_TYPE,
   INFO_NEWS_TYPE,
   SKIPASS_TYPE,
} from '@config/types';
import NavigatorService from '../../../helpers/NavigatorService';
import {
   clubCardsRoutes,
   hireRoutes,
   hotelsRoutes,
   infoPagesRoutes,
   skipassRoutes,
} from '@config/routes';
import useTheme from '@hooks/useTheme';
import useExternalLinksNavigation from '@hooks/useExternalLinksNavigation';
import useColors from '@hooks/useColors';
import DebugText from '@components/Debug/DebugText';

type Props = {
   baseFontStyle?: any;
   removeRNRN?: boolean;
   htmlText: string;
   allowTables?: boolean;
   plain?: boolean;
};

const HtmlText = props => {
   const {colors} = useTheme();

   const baseFontStyle = props.baseFontStyle
      ? props.baseFontStyle
      : {
         fontSize: 15,
         fontWeight: '400',
         lineHeight: 23,
         textAlign: 'left',
         color: colors.text,
         fontFamily: 'Geologica_Auto-Regular',
      };

   const headingStyles = {
      fontSize: 14,
      fontWeight: '500',
      marginBottom: 10,
   };

   const ignoredTags = [
      'img',
      'em',
      'strike',
      'u',
      'style',
      'sup',
      'sub',
      'frame',
      'iframe',
      'blockquote',
      'form',
      'table',
      'xml',
   ];//.concat(IGNORED_TAGS);

   const ignoredStyles = [
      'background-color',
      'background',
      'font',
      'font-family',
      'font-size',
      'margin-top',
      'margin-left',
      'margin-right',
      'margin-bottom',
      'text-align',
      'line-height',
      'font',
      'font-kerning',
      'color',
      'padding',
   ];

   let html = props.htmlText ? props.htmlText.replace(/<br \/><br \/>/g, '<br/> ').replace(/<br\/><br\/>/g, '<br/> ') : '<b></b>';

   if (props.removeRNRN) {
      //html = html.replace(/(?:\\[rn]|[\r\n]+)+/g, '');
      html = html.replace(/(\\r\\n)/g, '');
   } else {
      if (isAndroid) {
         //html = html.replace(/(?:[\r\n\r\n]+)+/g, '<hr class="brReplacer"/>');
         html = html.replace(/(\\r\\n\\r\\n)+/g, '<hr class="brReplacer"/>');
         /** Was problems with br on android */
         //html = html.replace(/(?:[\r\n]+)+/g, '<br>');
      }
   }

   // html = html
   //     .replace(/\\n/g, '')
   //     .replace(/\n/g, '')
   //     .replace(/  /g, '')
   //     .replace('/&nbsp;&nbsp;/g', '')
   //     .replace('/&nbsp;&nbsp;/g', '')
   //     .replace('/&nbsp;&nbsp;/g', '')
   //     .replace('/&nbsp;&nbsp;/g', '')
   //     .replace('/&nbsp;&nbsp/g', '')
   //     .replace(/<b>/g, '<strong>')
   //     .replace(/<\/b>/g, '</strong>')
   //     .replace(/<br><\/p>/g, '</p>')
   //     .replace(/<br\/><\/p>/g, '</p>');

   const {plain} = props;

   const cssRulesForTable = cssRulesFromSpecs(defaultTableStylesSpecs) +
      `
        table {width: 100%; border: none;}
       
        th {
            text-align: left;
            padding: 4px 8px !important;
            font-size: 14px !important;
            background-color: ${colors.gradients.surface.accentIndigo150} !important;
            color: ${colors.labels.onLight.primary} !important;
            border-color: ${colors.separators.vibrant};
            border-bottom-width: 1px;
        }
        
        th span {
            font-size: 14px !important;
        }
td {
    padding: 8px 10px !important;
    font-size: 14px;   
    text-align: left;
    background-color: ${colors.backgroundsGrouped.accent.neutral} !important;
    color: ${colors.labels.onLight.primary} !important;
    border-color: ${colors.separators.vibrant};
}

tr:last-child td {
  border-color: ${colors.states.error.border};
  background-color: ${colors.semantic.error};
}

tr:last-child td {
   border-color: ${colors.surface3};   
    background-color: ${colors.buttons.destructive.bg.default} !important;
    border-bottom-width: 0;
}
`;

   return (
      <RenderHTML
         source={{html}}
         baseStyle={baseFontStyle}
         systemFonts={['Geologica_Auto-Regular', 'Montserrat-Regular']}
         defaultTextProps={{
            allowFontScaling: false,
         }}
         //ignoredTags={ignoredTags}
         //ignoredDomTags={ignoredTags}
         contentWidth={Dimensions.get('window').width}
         customHTMLElementModels={{
            table: tableModel,
         }}
         WebView={WebView}
         renderers={{
            //p: plain ? paragraphRendererPlain : paragraphRenderer,
            // strong: strongRenderer,
            // b: strongRenderer,
            // br: brRenderer,
            // li: liRenderer,
            // ul: ulRenderer,
            // ol: ulRenderer,
            // hr: hrRenderer,
            table: TableRenderer,
            a: aRenderer,
            // i: iRenderer,
            // u: iRenderer,
         }}
         renderersProps={{
            table: {
               cssRules: cssRulesForTable,
            },
         }}

         //ignoredDomStyles={ignoredStyles}
         tagsStyles={{
            b: {fontWeight: '600'},
            strong: {fontWeight: '600'},
            a: {
               fontWeight: '500',

               //color: COLOR_SECOND,
            },
            p: {
               ...baseFontStyle,
               marginBottom: 0,
               //fontFamily: 'Montserrat-Regular',
            },
            span: {
               //fontFamily: 'Montserrat-Regular',
               fontWeight: '700',
            },
            // h1: {
            //     ...headingStyles,
            //     fontSize: 20,
            //     lineHeight: 25,
            // },
            // h2: {
            //     ...headingStyles,
            //     fontSize: 18,
            //     lineHeight: 23,
            // },
            // h3: {
            //     ...headingStyles,
            // },
            // h4: {
            //     ...headingStyles,
            // },
            // h5: {
            //     ...headingStyles,
            // },
            // h6: {
            //     ...headingStyles,
            // },
         }}
      />
   );
};

HtmlText.propTypes = {
   baseFontStyle: PropTypes.any,
   removeRNRN: PropTypes.bool,
   htmlText: PropTypes.any,
   allowTables: PropTypes.bool,
};

HtmlText.defaultProps = {
   htmlText: '',
};

function paragraphRenderer(htmlAttribs, children, convertedCSSStyles, passProps) {
   // This helper allows you to compose the final style of your renderers easily.
   // It will return a style object based on :
   // - the default styles for this HTML tag (if any)
   // - your "htmlStyles" prop for this tag
   // - the conversion of the "style" attribute from CSS to RN
   // - your "classesStyles" prop for the classes of the rendered component
   // - any "additionalyStyles" you provide in the options object
   // const style = _constructStyles({
   //    tagName: 'bluecircle',
   //    htmlAttribs,
   //    passProps,
   //    styleSet: 'VIEW',
   //    baseFontSize: 14
   // });
   return (
      <AppText
         key={passProps.key}

         style={{
            fontSize: 15,
            marginBottom: 15,
            flexDirection: 'row',
            textAlign: 'left',
            fontWeight: '300',
         }}
      >
         {children}
      </AppText>
   );
}

function paragraphRendererPlain(htmlAttribs, children, convertedCSSStyles, passProps) {
   return (
      <AppText
         key={passProps.key}
         style={{
            fontSize: 15,
            marginBottom: 0,
            flexDirection: 'row',
            textAlign: 'left',
            fontWeight: '300',
         }}
      >
         {children}
      </AppText>
   );
}

function strongRenderer(htmlAttribs, children, convertedCSSStyles, passProps) {
   return (
      <AppText key={passProps.key} style={{fontWeight: '500'}}>
         {children}
      </AppText>
   );
}

function brRenderer(htmlAttribs, children, convertedCSSStyles, passProps) {
   return (
      <AppText key={passProps.key} style={{height: 20}}>
         {'\n'}
      </AppText>
   );
}

function iRenderer(htmlAttribs, children, convertedCSSStyles, passProps) {
   return (
      <AppText key={passProps.key} style={{fontWeight: 'normal'}}>
         {children}
      </AppText>
   );
}

//Error with nesting View in Text
function ulRenderer(htmlAttribs, children, convertedCSSStyles, passProps) {
   return (
      <View
         key={passProps.key}
         style={{
            marginLeft: 10,
            marginBottom: 20,
         }}
      >
         {children}
      </View>
   );
}

function hrRenderer(htmlAttribs, children, convertedCSSStyles, passProps) {
   const style =
      htmlAttribs.class === 'brReplacer'
         ? {width: '100%', height: 20, backgroundColor: 'transparent'}
         : {
            width: '100%',
            height: 1,
            backgroundColor: '#ccc',
            marginVertical: 10,
         };

   return <View style={style} />;
}

function aRenderer({TDefaultRenderer, ...props}) {
   const colors = useColors();

   const {navigateToInternalPage} = useExternalLinksNavigation();

   const onLinkPress = () => {
      navigateToInternalPage(props?.tnode?.attributes?.href);
   };

   return props?.tnode?.data || props?.tnode?.children?.[0]?.data ? (
      <TDefaultRenderer {...props} onPress={onLinkPress} style={{
         textDecorationColor: colors.primary,
         lineHeight: 23,
         textDecorationLine: 'underline',
      }}>
         <AppText style={{color: colors.primary}}>
            {props?.tnode?.data || props?.tnode?.children[0]?.data}
         </AppText>
      </TDefaultRenderer>
   ) : (
      <TDefaultRenderer {...props} onPress={onLinkPress} />
   );
}

function liRenderer(htmlAttribs, children, convertedCSSStyles, passProps) {
   return (
      <AppText key={passProps.key} style={{fontWeight: '300', lineHeight: 24, marginBottom: 10}}>
         {' '}
         - {children}
      </AppText>
   );
}

export default HtmlText;
