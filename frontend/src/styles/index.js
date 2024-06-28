import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { colors } from "./colors";
import { fonts } from "./fonts";
import { breakpoints } from "./breakpoints";
const activeLabelStyles = {
  transform: "scale(0.85) translateY(-24px)",
};
const theme = extendTheme({
  colors,
  fonts,
  breakpoints,
  styles: {
    global: (props) => ({
      body: {
        fontFamily: "body",
        color: mode("bgColor.100", "whiteAlpha.900")(props),
        bg: mode("white", "bgColor.200")(props),
        lineHeight: "base",
      },
    }),
  },
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            "input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label":
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: "absolute",
              backgroundColor: "white",
              pointerEvents: "none",
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: "left top",
            },
          },
        },
      },
    },
  },
});

export default theme;
