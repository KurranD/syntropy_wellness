import React, { Component, useState } from 'react';
import languageParser from '../languages/LanguageParser';
import { LanguageContext } from '../languages/LanguageContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DropDownContainer = styled("div")``;
const DropDownHeader = styled("div")``;
const DropDownListContainer = styled("div")``;
const DropDownList = styled("ul")`
  padding:0;
  margin:0;
`;
const ListItem = styled("li")``;

class NavBar extends Component {
  state = {
    loading: true,
    languageMenuOpen: false
  };

  toggle = (value) => {
    this.setState({languageMenuOpen: value})
  }

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
                    <DropDownContainer onMouseEnter={() => this.toggle(true)} onMouseLeave={() => this.toggle(false)}>
                      <DropDownHeader className='nav-item'>{languageParser.getTranslationByKey('language_selection', language)}</DropDownHeader>
                      {this.state.languageMenuOpen && 
                      <DropDownListContainer>
                        <DropDownList>
                          <ListItem className='nav-item' onClick={() => changeLanguage('en')}>English</ListItem>
                          <ListItem className='nav-item' onClick={() => changeLanguage('fr')}>Français</ListItem>
                        </DropDownList>
                      </DropDownListContainer>}
                    </DropDownContainer>
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
