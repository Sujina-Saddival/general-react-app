import { api } from './api-lib/api';

export const REQUEST_LIST_ITEMS = 'REQUEST_LIST_ITEMS';
export const ITEMS_LISTED_SUCCESS = 'ITEMS_LISTED_SUCCESS';
export const ITEMS_LISTED_FAILURE = 'ITEMS_LISTED_SUCCESS';
export const ITEMS_CREATED_SUCCESS = 'ITEMS_CREATED_SUCCESS';
export const ITEMS_CREATED_FAILURE = 'ITEMS_CREATED_FAILURE';
export const UPDATE_ITEMS_LIST = 'UPDATE_ITEMS_LIST';


const requestItems = () => {
  return {
    type: REQUEST_LIST_ITEMS,
  }
}

const itemListedSuccess = (items) => {
  return {
    type: ITEMS_LISTED_SUCCESS,
    items,
  }
}

const itemListedFailure = (error) => {
  return {
    type: ITEMS_LISTED_FAILURE,
    error,
  }
}

const itemCreatedSuccess = (item) => {
  return {
    type: ITEMS_CREATED_SUCCESS,
    item,
  }
}

const itemCreatedFailure = (error) => {
  return {
    type: ITEMS_CREATED_FAILURE,
    error,
  }
}

export const listItems = () => dispatch => {
  dispatch(requestItems());
  return api.get('/list')
    .then(resp => {
      Promise.resolve(dispatch(itemListedSuccess(resp.data)))
    })
    .catch(error => {
      Promise.reject(dispatch(itemListedFailure(error)))
    })
};


export const createItem = (itemName, sort_number) => dispatch => {
  const payload = {
    item: {
      name: itemName,
      sort_number
    }
  }
  dispatch(requestItems());
  return api.post('/item', payload)
    .then(resp => {
      Promise.resolve(dispatch(itemCreatedSuccess(resp.data)))
    })
    .catch(error => {
      Promise.reject(dispatch(itemCreatedFailure(error)))
    })
};

export const updateItemsArray = (items) => {
  return {
    type: UPDATE_ITEMS_LIST,
    items,
  }
}

export const updateSortOrder = (pIndex, nIndex, selectedItem, items) => dispatch => {
  debugger
  const payload = {
    old_sort_number: pIndex,
    new_sort_number: nIndex,
    selected_item_id: selectedItem.id
  }
  dispatch(updateItemsArray(items));
  return api.put('/updateItemsOrder', payload)
    .then((resp) => {
      debugger
    })
    .catch((error) => {
      debugger
    })
}
