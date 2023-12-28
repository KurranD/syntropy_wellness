import './events.css';
import languageParser from '../languages/LanguageParser';
import { LanguageContext } from '../languages/LanguageContext';
import { Component } from 'react';

export class Events extends Component{
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
                    <div className='text_display'>
                        {this.state.loading === true ? <p>...</p> :
                        <div>
                            <h3>{languageParser.getTranslationByKey('events', language)}</h3>
                            <table className='table'>
                                <tbody>
                                    <tr>
                                        <td className='td'>{languageParser.getTranslationByKey('upcoming_events', language)}</td>
                                        <td className='td'></td>
                                        <td className='td'>{languageParser.getTranslationByKey('booking_info', language)}</td>
                                    </tr>
                                    <tr>
                                        <td className='td'></td>
                                        <td className='td'>{languageParser.getTranslationByKey('past_events', language)}</td>
                                        <td className='td'></td>
                                    </tr>
                                    <tr>
                                        <td>{languageParser.getTranslationByKey('spencer_music', language)}</td>
                                        <td>{languageParser.getTranslationByKey('photos_events', language)}</td>
                                        <td>{languageParser.getTranslationByKey('booking_link', language)}</td>
                                    </tr>
                                    <tr>
                                        <td>{languageParser.getTranslationByKey('book_event', language)}</td>
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
