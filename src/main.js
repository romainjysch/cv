import Vue from "vue";
import App from "./App.vue";
import "./main.css";
import "bootswatch/dist/simplex/bootstrap.min.css";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
