import './App.css';
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
                    <div className="App">
                        {this.state.loading === true ? <p>...</p> :
                        <div>
                            <div>
                                <h2>{languageParser.getTranslationByKey('canadian_politics_demystified', language)}</h2>
                            </div>
                        </div>
                        }
                    </div>
                )}
            </LanguageContext.Consumer>
        );
    };
}
