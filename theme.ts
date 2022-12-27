import { extendTheme, defineStyle } from "@chakra-ui/react";

const outline = defineStyle({
  border: '2px dashed',
  borderRadius: 0,
  fontWeight: 'semibold',
  backgroundColor: 'black',
  color: 'white'
})

const theme = extendTheme({
  colors: {
    customGray: {
      100: "#fafafa",
      200: "#f7f7f7",
    },
  },
  components: {
    Button: {
      variants: { outline }
    }
  }
});

export default theme;
