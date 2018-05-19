import { jueJinList } from '../../services/jueJin/jueJin'

export default ({
  namespace: 'jueJin',
  state: {
     title: '掘金列表',
     list: []
  },
  mutations: {
    saveList (state,payload) {
      return {
        ...state,
        list: payload
      }
    }
  },
  actions: {
    getList(params) {
      return async ({ dispatcher, take, state, getState, eventBus }) => {
        const ret = await jueJinList({})
        console.log('ret',ret)
        dispatcher.saveList(params)
      }
    },
  },
  setups: function ({ eventBus, dispatcher }) {
    console.log('jueJinObj', eventBus, dispatcher);
    eventBus.listen('jueJin/.*:after',() => { // 监听提交的action
      console.log('监听提交的action')
    })
  }
});
