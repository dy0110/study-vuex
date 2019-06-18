import Vue from "vue";
import Vuex from "vuex";
import router from "./router";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: ["感想を入力", "確認画面", "送信完了"],
    button: ["確認", "送信"],
    component: ["TextareaComp", "StringComp"],
    stepCount: 0,
    errorMsg: "入力は必須です",
    impression: "",
    errorFlag: false//trueなら通過
  },
  mutations: {
    setStepCount(state){
      console.log("rootsetStepCount")
      state.stepCount++
    },
    updateImpression(state, value){
      state.impression = value
      if( state.impression ){
        state.errorFlag = true
      } else {
        state.errorFlag = false
      }
    }
  },
  actions: {
    buttonAction({ commit, state,rootState })  {
      console.log("buttonAction")
      if (rootState.errorFlag) {
        // rootへのアクセス
        commit('setStepCount',null, { root: true })
      }
      if (rootState.stepCount == 2) {
       router.push('thanks')
      }
    }
  },
  getters: {
    getTitle( state, getters,rootState ){
      return state.title[rootState.stepCount]
    },
    getButton( state, getters,rootState ){
      return state.button[rootState.stepCount]
    },
    getError(state, getters,rootState ){
      if( rootState.errorFlag){
        return null
      } else {
        return state.errorMsg
      }
    },
    getComponent (state, getters, rootState) {
      return state.component[rootState.stepCount]
    },
    getString (state, getters, rootState) {
      return rootState.impression
    }
  }
});
