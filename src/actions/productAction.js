import axios from 'axios';
import {PRODUCT_FETCH, PRODUCTS_FETCH, PRODUCTS_CREATE, PRODUCTS_EDIT, PRODUCTS_CLEAR, PRODUCTS_GET_ID} from './type';


export const productFetch = (id) => {
	return dispatch => {
		axios.get(process.env.REACT_APP_API_URL + '/product/' + id).then(res=>{
			dispatch({type: PRODUCT_FETCH, data: res.data});
		})
	}
}

export const productsFetch = () => {
	return dispatch => {
		axios.get(process.env.REACT_APP_API_URL + '/product').then(res=>{
			dispatch({type: PRODUCTS_FETCH, data: res.data});
		})
	}
}

export const productDelete = (id) => {
	return dispatch => {
		axios.delete(process.env.REACT_APP_API_URL + '/product/' + id).then(res => {
			axios.get(process.env.REACT_APP_API_URL + '/product/').then(res => {
				dispatch({type: PRODUCTS_FETCH, data: res.data});
			})
		})
	}
}

export const productCreate = (productValues) => {
	return dispatch => {
		axios.post(process.env.REACT_APP_API_URL + '/product', productValues).then(res => {
			dispatch({type: PRODUCTS_CREATE});
		});
	}
}

export const productEdit = (productId, productValues) => {
	return dispatch => {
		axios.put(process.env.REACT_APP_API_URL + '/product/' + productId, productValues).then(res => {
			dispatch({type: PRODUCTS_EDIT});
		});
		// axios.put(process.env.REACT_APP_API_URL + '/product/' + productId, productValues);
	}
}

export const productsClear = () => {
	return dispatch => {
		dispatch({type: PRODUCTS_CLEAR});
	}
}

