import axios from 'axios';
import {CONTACT_SUBMIT, CONTACT_INITIAL} from './type';

export const contactSubmit = (contactFormValues) => {
	return dispatch => {
		axios.post(process.env.REACT_APP_API_URL + '/comment', contactFormValues).then(res=>{
			dispatch({type: CONTACT_SUBMIT});
		})
	}
}

export const initialFormTest555 = () => {
	return dispatch => {
		dispatch({type: CONTACT_INITIAL});
	}
}