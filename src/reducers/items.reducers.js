
import {
  REQUEST_LIST_ITEMS,
  ITEMS_LISTED_SUCCESS,
  ITEMS_LISTED_FAILURE,
  UPDATE_ITEMS_LIST
} from '../actions/items.actions';

const initialState = {
  items: [],
  pending: false,
}

const items = (state = initialState, action) => {
  switch(action.type){
    case REQUEST_LIST_ITEMS:
    return {
      ...state,
      pending: true,
    }
    case ITEMS_LISTED_SUCCESS:
    return {
      ...state,
      items: action.items,

    }
    case UPDATE_ITEMS_LIST:
      return {
        ...state,
        items: action.items,
      }
    default:
      return state;
  }
}

export default items;