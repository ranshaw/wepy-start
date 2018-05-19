
 export default({
  namespace: 'count',
  state: {
    count: 0
  },

  mutations: {
    plus(state, num) {
      state.count += num;
    },
    sub(state, num) {
      state.count -= num;
    }
  }
});
