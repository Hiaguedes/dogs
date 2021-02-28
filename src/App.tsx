import GlobalStyle from './global';
import { ThemeProvider } from 'styled-components';
import theme from './utils/theme';
import UserPost from './api/UserPost/UserPost'

// user: dog pass: dog

function App() {
  return (
    <ThemeProvider theme={theme.light}>
    <GlobalStyle />
      <UserPost />
    </ThemeProvider>
  );
}

export default App;
