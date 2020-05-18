import API from "./api";
import { initialization, setCountry } from "./actionCreators";

export const onInitialization = () => (dispatch) => {
    API.getSummary().then(summary => dispatch(initialization(summary)))
}

export const onSetCountry = (country) => (dispatch) => {
    API.getCountry(country).then(countryObj => dispatch(setCountry(countryObj)))
}