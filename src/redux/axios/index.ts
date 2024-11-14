import Axios from 'axios';
import {token} from '../../helpers/token';
import {BASE_URL} from '@env';

const authAxios = Axios.create();
authAxios.interceptors.request.use(
  async function (options) {
    options.baseURL = BASE_URL;
    const tokenn = await token();
    if (tokenn) {
      options.headers['Authorization'] = `Bearer ${tokenn}`;
    }
    return options;
  },
  function (error) {
    console.log('Api Request error: ', error);
    const errorData = {
      status: false,
      message: error.message,
    };
    return Promise.reject(errorData);
  },
);

export default authAxios;
