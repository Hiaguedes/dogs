import GlobalStyle from './global';
import { ThemeProvider } from 'styled-components';
import theme from './utils/theme';
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login'

// user: dog pass: dog

function App() {

  return (
    <ThemeProvider theme={theme.light}>
    <GlobalStyle />
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/login">
        <Login />     
      </Route>
    </Routes>
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
