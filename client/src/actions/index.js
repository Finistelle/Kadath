import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => dispatch => {
  axios
    .get('/api/user/current_user')
    .then(res => dispatch({ type: FETCH_USER, payload: res.data }));
};
