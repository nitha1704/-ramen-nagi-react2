import axios from 'axios';
import { TOTAL_ORDER_FETCH } from './type';

export const totalOrderFetch = () => {
    return (dispatch) => {
        axios.get(process.env.REACT_APP_API_URL + '/totalOrders').then(res => {
            dispatch({ type: TOTAL_ORDER_FETCH, data: res.data });
        })
    }
}

export const deleteTotalOrder = (id) => {
    return (dispatch) => {
        axios.delete(process.env.REACT_APP_API_URL + '/totalOrders/' + id).then(res=>{
            axios.get(process.env.REACT_APP_API_URL + '/totalOrders/').then(res=>{
                dispatch ({type:TOTAL_ORDER_FETCH,data: res.data});
            })
        })
    }
}