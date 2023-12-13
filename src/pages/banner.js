import './banner.css';
import languageParser from '../languages/LanguageParser';
import { LanguageContext } from '../languages/LanguageContext';
import { Component } from 'react';

export class Banner extends Component{
    state = {
        loading: true,
    }

    componentDidMount = async () => {
        await languageParser.fetchTranslations();
        this.setState({loading: false});
    }
    
    render() {
        return (
            <LanguageContext.Consumer>
                {({ language }) => (
                    <div className="banner">
                        {this.state.loading === true ? <p>...</p> :
                            languageParser.getTranslationByKey('banner', language)
                        }
                    </div>
                )}
            </LanguageContext.Consumer>
        );
    };
}