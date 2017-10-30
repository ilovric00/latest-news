import news from './news';

export default function* rootSaga() {
  yield [
    ...news,
  ];
}
