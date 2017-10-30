import { FETCH_NEWS, NEWS } from '../actions';

const initialState = {
  status: '',
  source: '',
  sortBy: '',
  articles: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case NEWS.SUCCESS:
      return {
        ...state,
        status: action.payload.status,
        source: action.payload.source,
        sortBy: action.payload.sortBy,
        articles: action.payload.articles
      };

    default:
      return state;
  }
}