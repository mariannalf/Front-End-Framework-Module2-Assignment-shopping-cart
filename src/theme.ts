import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';


// A custom theme for this app
const theme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: '#3f51b5',
        },
        secondary: {
            main: '#f50057',
        },
        error: {
            main: red.A400,
        },
    },
});

export default theme;