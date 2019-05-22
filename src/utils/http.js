import axios from './axios'
import {message} from 'antd'
import { DEFAULT_BASE_URL } from './config';
axios.defaults.baseURL = DEFAULT_BASE_URL;
export const request = (type, url, preload) =>{
    const params = preload || {};
    const uri = DEFAULT_BASE_URL + url
    return new Promise((resolve, reject) => {
        if (type === 'get') {
          axios.get(uri, { params }).then((res) => {
            _handleResult(res, (res) => {
              resolve(res);
            });
          });
        }
        if (type === 'post') {
          axios.post(uri, params).then((res) => {
            _handleResult(res, (res) => {
              resolve(res);
            });
          });
        }
      });
}
export const _handleResult = (res, callback, errorMessage) => {
    const result = res.data;
    const subCode = result.data.subCode;
    if (subCode === 10000) {
      callback(result.data);
    } else if (subCode === 12100 || subCode === 12300 || subCode === 12200 || subCode === 12400 || subCode === 12700) {
     message.error(result.data.subMsg);
    } else if (subCode === 10001) { // 导出打款批次号
      callback(result.data);
    } else {
      const errMsg = errorMessage || result.data.subMsg || '出错了';
      message.error(errMsg);
    }
  };
export const post = (url, preload, handleError) => request('post', url, preload);
export const get = (url, preload, handleError) => request('get', url, preload);