import GlobalStyle from './global';
import { ThemeProvider } from 'styled-components';
import theme from './utils/theme';
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoutes from './components/ProtectedRoutes'
import Login from './pages/Login';
import LoginProvider from './contexts/LoginContext';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound' 


// user: dog pass: dog

function App() {

  return (
    <ThemeProvider theme={theme.light}>
      <GlobalStyle />
      <LoginProvider>
        <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="login/*" element={<Login /> }/>
            <ProtectedRoutes path="home/*" element={<Home />}/>
            <Route path="*" element={<PageNotFound /> }/>
          </Routes>
        </BrowserRouter>
      </LoginProvider>
    </ThemeProvider>
  );
}

export default App;
