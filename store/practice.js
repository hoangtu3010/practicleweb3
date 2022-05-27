export default {
  state: () => ({}),
  mutations: {},
  actions: {
    sGetListCandidates({ commit }, data) {
      return new Promise((resolve, reject) => {
        return this.$axios
          .get(this.$api.CANDIDATE)
          .then((res) => {
            return resolve(res.data);
          })
          .catch((err) => {
            return reject(err);
          });
      });
    },
    sCreateCandidate({ commit }, data) {
      return new Promise((resolve, reject) => {
        return this.$axios
          .post(this.$api.CANDIDATE, data)
          .then((res) => {
            return resolve(res);
          })
          .catch((err) => {
            return reject(err);
          });
      });
    },
  },
  getters: {},
};
