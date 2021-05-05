import TopBar from './ui/TopBar'
import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import yellow from '@material-ui/core/colors/yellow';
import pink from '@material-ui/core/colors/pink';
import FooterBar from './ui/FooterBar';
import KarangosForm from './routed/KarangosForm';
import KarangosList from './routed/KarangosList';


const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: yellow[500],
    },
    secondary: {
      main: pink[500],
    },
  },
});

const useStyles = makeStyles((theme) => {
  box: {
    backgroundColor: theme.palette.background.default;
    minHeight: '100vh'
  },
  qualquercoisa: {}
})

function Main() {
  const classes = useStyles()
  return (
    <Box className={classes.box}>
      <TopBar/>
      <Box id="routed">
        <KarangosList/>
      </Box>  
    </Box>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TopBar />
      <FooterBar/>
    </ThemeProvider>
  );
}

export default App;