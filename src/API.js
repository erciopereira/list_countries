import axios from 'axios';

const API = {
    getPaises: async () => {
      const res = { res: '', erro: '' };
      await axios
        .get('https://restcountries.eu/rest/v2/all')
        .then(response => {
          res.res = response.data;
        })
        .catch(er => {
          res.erro = er.response;
        });
      return res;
    },
}

export default () => API;