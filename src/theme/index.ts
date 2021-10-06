import { extendTheme , theme as base} from "@chakra-ui/react";
const theme = extendTheme({
    colors: {
        brand: {
            500: '#8ac191',
            600: '#71ab09',
            700: '#578602'
        }
        
    },
    fonts: {
        heading: `Montserrat, ${base.fonts.heading}`,
        body:  `Inter, ${base.fonts.body}`,
    }

});
export default theme;