import { createStore } from "vuex";

export default createStore({
  state: {
    user: {
      name: "",
      age: null,
    },
    children: [],
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },

    addChild(state, child) {
      state.children.push(child);
    },
    removeChild(state, index) {
      state.children.splice(index, 1);
    },
  },
  actions: {
    addChild({ commit }, child) {
      commit("addChild", child);
    },
    removeChild({ commit }, index) {
      commit("removeChild", index);
    },
  },
  getters: {
    getUser(state) {
      return state.user;
    },
    getChildren(state) {
      return state.children;
    },
  },
});
