import { createAction, createActionsFromTypes, createRequestTypes, createCrudActions, createCrudTypes } from '../../utils/action-helpers';

export const FETCH_NEWS = 'FETCH_NEWS';
export const fetchNews = createAction(FETCH_NEWS);

export const NEWS = createRequestTypes('NEWS');
export const news = createActionsFromTypes(NEWS);
