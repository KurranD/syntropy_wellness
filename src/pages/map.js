import './App.css';
import languageParser from '../languages/LanguageParser';
import { LanguageContext } from '../languages/LanguageContext';
import { Component } from 'react';

export class Map extends Component{
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
                {({ language }) => (
                    <div className="App">
                        {this.state.loading === true ? <p>...</p> :
                        <div>
                            <h2>{languageParser.getTranslationByKey('map_tab', language)}</h2>
                        </div>
                        }
                    </div>
                )}
            </LanguageContext.Consumer>
        );
    };
}
