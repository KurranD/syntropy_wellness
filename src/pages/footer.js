import languageParser from '../languages/LanguageParser';
import { LanguageContext } from '../languages/LanguageContext';
import { Component } from 'react';
import './footer.css'; 

export class Footer extends Component{
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
                    <div className='footer'>
                        {this.state.loading === true ? <p>...</p> :
                        <table className='table'>
                            <tbody>
                                <tr>
                                    <td className='td'>{languageParser.getTranslationByKey('blog', language)}</td>
                                    <td className='td'>{languageParser.getTranslationByKey('contact', language)}</td>
                                    <td className='td'>{languageParser.getTranslationByKey('newsletter', language)}</td>
                                </tr>
                                <tr>
                                    <td className='td'>{languageParser.getTranslationByKey('ig', language)}</td>
                                    <td className='td'>{languageParser.getTranslationByKey('phone_numbers', language)}</td>
                                    <td className='td'>{languageParser.getTranslationByKey('terms_conditions', language)}</td>
                                </tr>
                                <tr>
                                    <td className='td'>{languageParser.getTranslationByKey('facebook', language)}</td>
                                    <td className='td'>{languageParser.getTranslationByKey('emails', language)}</td>
                                    <td className='td'></td>
                                </tr>
                                <tr>
                                    <td className='td'></td>
                                    <td className='td'>{languageParser.getTranslationByKey('location_map', language)}</td>
                                    <td className='td'></td>
                                </tr>
                            </tbody>
                        </table>
                        }
                    </div>
                )}
            </LanguageContext.Consumer>
        );
    };
}
