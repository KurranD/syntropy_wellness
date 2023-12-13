import { LanguageProvider } from './languages/LanguageContext';
import { MainPage } from './pages/mainPage';
import { About } from './pages/about';
import { Banner } from './pages/banner';
import { Services } from './pages/services';
import { Media } from './pages/media';
import { ClientSuccess } from './pages/clientSuccess';
import NavBar from './pages/navbar';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div style={{backgroundColor: '#e0f7fa', minHeight: '100vh'}}>
          <Banner />
          <MainPage />
          <NavBar/>
          <div style={{padding: '25vh 0 0 0'}}>
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/media" element={<Media />} />
              <Route path="/client_success" element={<ClientSuccess />} />
            </Routes>
          </div>
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
