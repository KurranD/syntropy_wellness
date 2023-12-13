import './clientSuccess.css';
import languageParser from '../languages/LanguageParser';
import { LanguageContext } from '../languages/LanguageContext';
import { Component } from 'react';

export class ClientSuccess extends Component{
    state = {
        loading: true,
        currentTab: 'generalInfo'
    }

    componentDidMount = async () => {
        await languageParser.fetchTranslations();
        this.setState({loading: false});
    }

    render() {
        return (
            <LanguageContext.Consumer>
                {({ language }) => (
                    <div>
                        {this.state.loading === true ? <p>...</p> :
                        <div>
                            {languageParser.getTranslationByKey('dummy_text_one', language)}
                            {languageParser.getTranslationByKey('dummy_text_two', language)}
                            {languageParser.getTranslationByKey('dummy_text_three', language)}
                            {languageParser.getTranslationByKey('dummy_text_four', language)}
                        </div>
                        }
                    </div>
                )}
            </LanguageContext.Consumer>
        );
    };
}
