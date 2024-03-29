import { ACTION_TYPES } from "./postActionTypes";

export const INITIAL_STATE = {
  title: "",
  desc: "",
  price: 0,
  category: "",
  tags: [],
  images: {
    sm: "",
    md: "",
    lg: ""
  },
  quantity: 0,
}

export const formReducer = (state,action) => {
  switch (action.type) {
    case ACTION_TYPES.CHANGE_INPUT:
      return{
        ...state,
        //update inputs according to their names : update them using their values
        [action.payload.name] : action.payload.value
      };
    case ACTION_TYPES.ADD_TAG:
      return{
        ...state,
        tags: [...state.tags, action.payload]
      };
    case ACTION_TYPES.REMOVE_TAG:
      return{
        ...state,
        //zwraca wszystko oprocz tego taga
        tags: state.tags.filter(tag => tag !== action.payload)
      };
    case ACTION_TYPES.INCREASE:
      return{
        ...state,
        quantity: state.quantity + 1
      };

    case ACTION_TYPES.DECREASE:
      return{
        ...state,
        quantity: state.quantity - 1
      };
    default:
      return state;
  }
}
