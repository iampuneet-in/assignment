const state = () => {
    return {
      shows: [],
    };
  };

  const getters = {};

  const mutations = {
    shows(state, shows) {
        state.shows = shows
    }
  };

  const actions = {
    async getAllShows ({ dispatch, commit }) {
        const data = await dispatch(
            'get',
            { action: '/shows' },
            { root: true }
        );
        commit('shows', data);
        return data;
    }
  }

  export default { namespaced: true, state, getters, mutations, actions };
