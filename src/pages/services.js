import './services.css';
import languageParser from '../languages/LanguageParser';
import { LanguageContext } from '../languages/LanguageContext';
import { Component } from 'react';

export class Services extends Component{
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
                    <div className='text_display'>
                        {this.state.loading === true ? <p>...</p> :
                        <div>
                            <h3>{languageParser.getTranslationByKey('services', language)}</h3>
                            <table className='table'>
                                <tbody>
                                    <tr>
                                        <td className='td'>{languageParser.getTranslationByKey('massage', language)}</td>
                                        <td className='td'>{languageParser.getTranslationByKey('food_sensitivy', language)}</td>
                                        <td className='td'>{languageParser.getTranslationByKey('personal_training', language)}</td>
                                    </tr>
                                    <tr>
                                        <td className='td'>{languageParser.getTranslationByKey('music', language)}</td>
                                        <td className='td'>{languageParser.getTranslationByKey('health_coaching', language)}</td>
                                        <td className='td'>{languageParser.getTranslationByKey('group_events', language)}</td>
                                    </tr>
                                    <tr>
                                    <td>{languageParser.getTranslationByKey('packages', language)}</td>
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
