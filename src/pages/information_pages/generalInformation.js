
import { Component } from 'react';
import languageParser from '../../languages/LanguageParser';

export class GeneralInformation extends Component{
    state = {
        loading: true
    }

    render() {
        return (
            <div>
                <div>
                    <h2>{languageParser.getTranslationByKey('canadian_politics_demystified', this.props.language)}</h2>
                </div>
                <div>
                    {languageParser.getTranslationByKey('canadian_politics_demystified', this.props.language)}
                </div>
            </div>    
        );
    };
}
