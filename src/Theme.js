import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
    components: {
      Button: {
        baseStyle: {
          fontWeight: "10px", 
        },
        variants: {
          solid: (props) => ({
            bg: props.colorMode === "dark" ? "#727B82" : "#727B82",
            borderRadius: "50px",
          }),
        },
      },
    },
  })

export default theme