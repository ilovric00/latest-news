import { put, call, fork, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions';

export function fetchNewsFromServer() {
    return fetch('https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=d52cd35eb1024c5fb2a42da5b8e51a70')
      .then(response => response.json());
  }
  
function* fetchNews() {
    yield put(actions.news.request());    
    try {
        const news = yield call(fetchNewsFromServer);
        yield put(actions.news.success(news));        
    } catch (error) {
        yield put(actions.news.failure(error));     
    }
}

export function* watchFetchNews() {
  yield takeLatest(actions.FETCH_NEWS, fetchNews);
}

export default [
  fork(watchFetchNews),
];
