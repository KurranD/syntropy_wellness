import './map.css';
import languageParser from '../languages/LanguageParser';
import { LanguageContext } from '../languages/LanguageContext';
import { Component } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

export class Map extends Component{
    state = {
        loading: true,
        map: null,
        federalRidingsData: null,
        municipalData: null,
        provincialData: null
    }

    componentDidMount = async () => {
        this.state.map = L.map('map').setView([56.1304, -106.3468], 4);

        // Add a tile layer (e.g., OpenStreetMap)
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        }).addTo(this.state.map);
        
        //NovaScotia Municipalities
        //const novaScotiaMunicipalDataResponse = await fetch('https://data.novascotia.ca/api/geospatial/gcep-xeci?method=export&format=GeoJSON');
        //const novaScotiaMunicipalData = await novaScotiaMunicipalDataResponse.json();
        /*L.geoJSON(novaScotiaMunicipalData).addTo(this.state.map);
        const newBrunswickMunicipalDataResponse = await fetch('https://gnb.socrata.com/api/geospatial/474s-bajm?method=export&format=GeoJSON');
        const newBrunswickData = await newBrunswickMunicipalDataResponse.json();
        L.geoJSON(newBrunswickData).addTo(this.state.map)
        const quebecMunicipalDataResponse = await fetch('https://www.donneesquebec.ca/recherche/dataset/ca1847da-e908-43de-bd8c-588570331650/resource/105b07f0-0b65-49f3-b6e0-f9b74629aa75/download/vdq-districtelectoral.geojson');
        const quebecMunicipalData = await quebecMunicipalDataResponse.json();
        L.geoJSON(quebecMunicipalData).addTo(this.state.map)*/
        if(!this.state.federalRidingsData) {
            const federalRidingsRequest = await fetch('./georef-canada-federal-electoral-district@public.geojson');
            this.state.federalRidingsData = await federalRidingsRequest.json();
        }
        
        L.geoJSON(this.state.federalRidingsData).addTo(this.state.map);
        
    }

    componentWillUnmount() {
        // Ensure proper cleanup to avoid "Map container is already initialized" error
        if (this.state.map) {
          this.state.map.remove();
        }
      }

    render() {
        return (
            <div className="map">
                <div div id="map" style={{ height: '85%', width: '100%', position:'absolute', bottom:0, zIndex:0 }}/>
                <div class='filter_buttons_map' style={{ position: 'absolute', bottom:10, left:10 }}>
                    <button class='button-item' onClick={() => console.log('Button 1 clicked')}>Federal</button>
                    <button class='button-item' onClick={() => console.log('Button 2 clicked')}>Provincial</button>
                    <button class='button-item' onClick={() => console.log('Button 3 clicked')}>Municipal</button>
                </div>
            </div>
        );
    };
}