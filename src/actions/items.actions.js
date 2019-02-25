import { api } from './api-lib/api';

export const REQUEST_LIST_ITEMS = 'REQUEST_LIST_ITEMS';
export const ITEMS_LISTED_SUCCESS = 'ITEMS_LISTED_SUCCESS';
export const ITEMS_LISTED_FAILURE = 'ITEMS_LISTED_SUCCESS';

const requestItems = () => {
  return {
    type: REQUEST_LIST_ITEMS,
  }
}

const itemListedSuccess = (resp) => {
  return {
    type: ITEMS_LISTED_SUCCESS,
    resp,
  }
}

const itemListedFailure = (items) => {
  return {
    type: ITEMS_LISTED_SUCCESS,
    items,
  }
}

export const listItems = () => dispatch => {
  dispatch(requestItems());
  return api.get('/list')
  .then(resp => {
    debugger
    Promise.resolve(dispatch(itemListedSuccess(resp.data)))
  })
  .catch(error => {
    debugger
    Promise.reject(dispatch(itemListedFailure(error)))
  })

}