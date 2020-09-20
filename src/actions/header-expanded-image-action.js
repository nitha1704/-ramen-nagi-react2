import axios from 'axios'
import { IMAGE_EXPANDED_MENU_ACTION } from './type';

export const imageFetch = () => {
    return (dispatch) => {
        axios.get(process.env.REACT_APP_API_URL + '/image_header_expanded_menu').then(res => {
            dispatch({ type: IMAGE_EXPANDED_MENU_ACTION, data: res.data })
        })
    }
}

