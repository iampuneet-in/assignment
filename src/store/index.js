import { createStore } from 'vuex';
import shows from './shows.store'
import api from '@/helpers/api';

const returnData = (data) => data;


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
        post({ dispatch }, options) {
          options.method = 'post';
          return dispatch('send', options);
        },
        put({ dispatch }, options) {
          options.method = 'put';
          return dispatch('send', options);
        },
        patch({ dispatch }, options) {
          options.method = 'patch';
          return dispatch('send', options);
        },
        delete({ dispatch }, options) {
          options.method = 'delete';
          return dispatch('send', options);
        },
      },
    modules: {
        shows
    }
})