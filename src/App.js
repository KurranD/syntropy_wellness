import './App.css';
import { LanguageProvider } from './languages/LanguageContext';
import { MainPage } from './pages/mainPage';
import { Information } from './pages/information';
import { Map } from './pages/map';
import NavBar from './pages/navbar';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div>
          <NavBar/>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/information" element={<Information />} />
            <Route path="/map" element={<Map />} />
          </Routes>
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
