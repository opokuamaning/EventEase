import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';
import { colors } from './colors';
import { fonts } from './fonts';
import { breakpoints } from './breakpoints';
const theme = extendTheme({
  colors,
  fonts,
  breakpoints,
  styles: {
    global: (props) => ({
      body: {
        fontFamily: 'body',
        color: mode('bgColor.100', 'whiteAlpha.900')(props),
        bg: mode('white', 'bgColor.200')(props),
        lineHeight: 'base',
      },
    }),
  },
});

export default theme;