import axios from 'axios';
import {MENU_FETCH} from './type';

export const menuFetch = ()=>{
    return (dispatch)=>{
        axios.get(process.env.REACT_APP_API_URL + '/menu').then(res=>{
            dispatch({type:MENU_FETCH, data: res.data});
        })
    }
}