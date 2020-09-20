import axios from 'axios';
import { LIST_EXPANDED_MENU_ACTION } from './type';

export const listFetch = () => {
    return (dispatch) => {
        axios.get(process.env.REACT_APP_API_URL + '/list_header_expanded_menu').then(res => {
            dispatch({ type: LIST_EXPANDED_MENU_ACTION, data: res.data })
        })
    }
}