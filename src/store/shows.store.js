const state = () => {
    return {
        shows: [],
    }
}

const getters = {

};

const mutations = {
    shows(state, shows) {
        state.shows = shows;
    }
};

const actions = {
    async fetchShows({ dispatch, commit }){
        const data = await dispatch(
            'get',
            { action: 'https://api.tvmaze.com/shows'},
            { root: true }
        );
        commit('shows', data);
        return { data };
    }
};


export default { namespaced: true, state, getters, mutations, actions };