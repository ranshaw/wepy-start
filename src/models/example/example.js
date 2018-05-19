export default ({
  namespace: 'example',
  state: {
     exampleList: [
      {
        name: '示例1',
        url: 'exp1'
      },
      {
        name: '示例2',
        url: 'exp2'
      }
     ],
     count: 1,
    loadState: '0'
  },

  mutations: {
    changeCount (state, payload) {
      return {
        ...state,
        count: payload
      }
    }
  },
  actions: {
    plus(params) {
      return async ({ dispatcher, take, state, getState, eventBus}) => {
        var count = state.count + params
        dispatcher.changeCount(count)
       }
    },
    sub(params) {
      return async ({ dispatcher, take, state, getState, eventBus }) => {
        var count = state.count - params
        dispatcher.changeCount(count)
      }
    }
  },
  setups: function (obj) {
    console.log('exampleObj', obj);
  }
});
