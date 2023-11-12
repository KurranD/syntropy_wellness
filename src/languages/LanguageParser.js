import Papa from 'papaparse';
const csvFilePath = './languageLookup.csv'

class LanguageParser {
    #translations = []

    fetchTranslations = async () => {
        try {
            const response = await fetch(csvFilePath);
            const csvData = await response.text();
            Papa.parse(csvData, {
              header: true,
              complete: (result) => {
                this.#translations = result.data;
              },
              error: (error) => {
                console.error('Error parsing translations CSV:', error.message);
              },
            });
          } catch (error) {
            console.error('Error fetching translations:', error);
          }
        };

    getTranslationByKey = (key, language) => {
        if(this.#translations.length === 0) {
            return false;
        }
        let entry = this.#translations.find((entry) => entry?.key === key);
        if(entry === undefined) {return false;}
        switch(language) {
            case 'en':
                return entry.en;
            case 'fr':
                return entry.fr;
            default:
                return false;
        }
    };
}

export default new LanguageParser()