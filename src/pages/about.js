import './about.css';
import languageParser from '../languages/LanguageParser';
import { LanguageContext } from '../languages/LanguageContext';
import { Component } from 'react';

export class About extends Component{
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
                        <div className='text_display'>
                            <h3>{languageParser.getTranslationByKey('about_us', language)}</h3>
                            <table>
                                <tbody>
                                    <tr className='single-item-row'>
                                        <td>{languageParser.getTranslationByKey('mission_statement', language)}</td>
                                    </tr>
                                    <tr className='single-item-row'>
                                        <td>{languageParser.getTranslationByKey('vision_statement', language)}</td>
                                    </tr>
                                    <tr className='two-item-row'>
                                        <td>{languageParser.getTranslationByKey('about_spencer', language)}</td>
                                        <td>{languageParser.getTranslationByKey('about_elizabeth', language)}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        }
                    </div>
                )}
            </LanguageContext.Consumer>
        );
    };
}
