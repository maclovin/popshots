import Axios from 'axios';

class Request {
  static do(method = '', url = '', data = {}, headers = {}) {
    return new Promise((resolve, reject) => {
      Axios({
        method,
        url,
        data,
        headers,
      }).then((response) => {
        resolve(response.data);
      }).catch(() => {
        reject();
      });
    });
  }
}

export default Request;
