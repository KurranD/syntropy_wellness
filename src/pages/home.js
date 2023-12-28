import './home.css';
import languageParser from '../languages/LanguageParser';
import { LanguageContext } from '../languages/LanguageContext';
import { Component } from 'react';

export class Home extends Component{
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
                            <h1 className='testimonial_header'>
                                {languageParser.getTranslationByKey('testimonials_title', language)}
                            </h1>
                            <div className='testimonial_text'>
                                {languageParser.getTranslationByKey('testimonials_text', language)}
                            </div>
                        </div>
                        }
                    </div>
                )}
            </LanguageContext.Consumer>
        );
    };
}
