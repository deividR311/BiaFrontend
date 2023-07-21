//OWN IMPORTS
import { COUNTRIES_API } from '../../../config/BaseService';
import { Country } from '../models/Country';

class CountriesService {
  getCountries = async () => {
    let response = await COUNTRIES_API.get<Country[]>(`/all`);
    return response.data;
  };

  getCountryByName = async ( name : string ) => {
    let response = await COUNTRIES_API.get<Country[]>(`/name/${name}`);
    return response.data[0];
  };
}

const countriesService = new CountriesService();

export default countriesService;