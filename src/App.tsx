import GlobalStyle from './global';
import { ThemeProvider } from 'styled-components';
import theme from './utils/theme';
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'
import Login from './pages/Login';
import LoginProvider from './contexts/LoginContext';

// user: dog pass: dog

function App() {

  return (
    <ThemeProvider theme={theme.light}>
      <GlobalStyle />
      <LoginProvider>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login /> }/>
          </Routes>
        </BrowserRouter>
      </LoginProvider>
    </ThemeProvider>
  );
}

export default App;
