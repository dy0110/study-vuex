import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Thanks from "./views/Thanks.vue"

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "*",
      redirect: '/'
    },
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: '/thanks',
      name: 'Thanks',
      component: Thanks
    }
  ]
});
