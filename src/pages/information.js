import './information.css';
import languageParser from '../languages/LanguageParser';
import { LanguageContext } from '../languages/LanguageContext';
import { Component } from 'react';
import { FederalGovernment } from './information_pages/federalGovernment';
import { ProvincialGovernment } from './information_pages/provincialGovernment';
import { MunicipalGovernment } from './information_pages/municipalGovernment';
import { Institions } from './information_pages/institutions';

export class Information extends Component{
    state = {
        loading: true,
        currentTab: 'federal'
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
                            <div className="App-information">
                                <h2>{languageParser.getTranslationByKey('information_tab', language)}</h2>
                            </div>
                            <div className='filter_buttons'>
                                <button onClick={() => this.setState({currentTab: 'federal'})} className='button-item'>{languageParser.getTranslationByKey('federal', language)}</button>
                                <button onClick={() => this.setState({currentTab: 'provincial'})} className='button-item'>{languageParser.getTranslationByKey('provincial', language)}</button>
                                <button onClick={() => this.setState({currentTab: 'municipal'})} className='button-item'>{languageParser.getTranslationByKey('municipal', language)}</button>
                                <button onClick={() => this.setState({currentTab: 'institutions'})} className='button-item'>{languageParser.getTranslationByKey('institutions', language)}</button>
                                <div className='information-pages'>
                                    {this.state.currentTab === 'federal' && <FederalGovernment/>}
                                    {this.state.currentTab === 'provincial' && <ProvincialGovernment/>}
                                    {this.state.currentTab === 'municipal' && <MunicipalGovernment/>}
                                    {this.state.currentTab === 'institutions' && <Institions/>}
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                )}
            </LanguageContext.Consumer>
        );
    };
}
