import { LanguageProvider } from './languages/LanguageContext';
import { MainPage } from './pages/mainPage';
import { About } from './pages/about';
import { Banner } from './pages/banner';
import { Services } from './pages/services';
import { Events } from './pages/events';
import { Home } from './pages/home';
import NavBar from './pages/navbar';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { Footer } from './pages/footer';

function App() {
  return (
    <LanguageProvider>
      <Router basename={'/'}>
        <div style={{backgroundColor: '#e0f7fa', minHeight: '100vh'}}>
          <Banner />
          <MainPage />
          <NavBar/>
          <div style={{padding: '25vh 0 0 0'}}>
            <Routes>
              <Route path="/services" element={<Services />} />
              <Route path="/events" element={<Events />} />
              <Route path="/home" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </div>
          <Footer/>
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
