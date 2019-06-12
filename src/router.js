import Vue from "vue";
import Router from "vue-router";
import Intro from "./components/introduction";
import Works from "./components/works";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "intro",
      component: Intro
    },
    {
      path: "/works",
      name: "works",
      component: Works
    }
  ]
});
