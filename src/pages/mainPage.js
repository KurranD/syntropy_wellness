import './mainPage.css';
import languageParser from '../languages/LanguageParser';
import { LanguageContext } from '../languages/LanguageContext';
import { Component } from 'react';

export class MainPage extends Component{
    state = {
        loading: true
    }

    componentDidMount = async () => {
        await languageParser.fetchTranslations();
        this.setState({loading: false});
    }

    render() {
        return (
            <LanguageContext.Consumer>
                {({ language, changeLanguage }) => (
                    <div className="header">
                        {this.state.loading === true ? <p>...</p> :
                        <div>
                            <h2>{languageParser.getTranslationByKey('syntropy_wellness', language)}</h2>
                        </div>
                        }
                    </div>
                )}
            </LanguageContext.Consumer>
        );
    };
}
