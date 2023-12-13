import React, { Component, useState } from 'react';
import languageParser from '../languages/LanguageParser';
import { LanguageContext } from '../languages/LanguageContext';
import { Link } from 'react-router-dom';
import './navbar.css';

class NavBar extends Component {
  state = {
    loading: true,
    languageMenuOpen: false,
    navBarVisible: true,
    prevScrollPosition: window.pageYOffset
  };

  toggle = (value) => {
    this.setState({languageMenuOpen: value})
  }

  handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    const isScrollingDown = this.state.prevScrollPosition < currentScrollPos;

    this.setState({navBarVisible: !isScrollingDown});
  };

  componentDidMount = async () => {
    await languageParser.fetchTranslations();
    window.addEventListener('scroll', this.handleScroll);
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
            <nav className={`navbar ${this.state.navBarVisible ? 'visible' : 'hidden'}`}>
                <ul className="nav-list">
                    <Link className="nav-item" to="/about">{languageParser.getTranslationByKey('about', language)}</Link>
                    <Link className="nav-item" to="/services">{languageParser.getTranslationByKey('services', language)}</Link>
                    <Link className="nav-item" to="/media">{languageParser.getTranslationByKey('media', language)}</Link>
                    <Link className="nav-item" to="/client_success">{languageParser.getTranslationByKey('client_success', language)}</Link>
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
