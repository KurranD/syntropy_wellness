import React, { Component } from 'react';
import languageParser from '../languages/LanguageParser';
import { LanguageContext } from '../languages/LanguageContext';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import {Information} from './information';
import {MainPage} from './mainPage';

class NavBar extends Component {
  state = {
    loading: true,
  };

  componentDidMount = async () => {
    await languageParser.fetchTranslations();
    this.setState({ loading: false });
  };

  render() {
    return (
      <LanguageContext.Consumer>
        {({ language, changeLanguage }) => (
          <div>
            {this.state.loading === true ? (
              <p>...</p>
            ) : (
            <nav className="navbar">
                <ul className="nav-list">
                    <Link className="nav-item" to="/">{languageParser.getTranslationByKey('home_tab', language)}</Link>
                    <Link className="nav-item" to="/information">{languageParser.getTranslationByKey('information_tab', language)}</Link>
                    <Link className="nav-item" to="/map">{languageParser.getTranslationByKey('map_tab', language)}</Link>
                    <li onClick={() => changeLanguage(language === 'en' ? 'fr' : 'en')} className='nav-item'>{languageParser.getTranslationByKey('language_selection', language)}</li>
                </ul>
            </nav>
            )}
          </div>
        )}
      </LanguageContext.Consumer>
    );
  }
}

export default NavBar;
