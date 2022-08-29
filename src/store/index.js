import { createStore } from 'vuex';
import api from '@/helpers/api';
import shows from './shows';

const returnData = ({data}) => data;


export default createStore({
    state: {},
    mutations: {},
    actions: {
        initialize({ dispatch }) {
          dispatch('user/initialize');
        },
        send(ctx, { method, action, param, formData }) {
          let route = param ? `${action}/${param}` : action;
          return api[method](route, formData).then(returnData);
        },
        get({ dispatch }, options) {
          options.method = 'get';
          return dispatch('send', options);
        },
      },
    modules: {
      shows,
    }
});