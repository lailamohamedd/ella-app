import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
// import store from "./store";

// Pinia Config
import { createPinia } from "pinia";

// Emitter Config
import mitt from "mitt"
const Emitter = mitt();

// Swiper config
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

//vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "@mdi/font/css/materialdesignicons.css";

const vuetify = createVuetify({
  components,
  directives,
});

createApp(App).use(vuetify).use(createPinia()).provide("Emitter", Emitter).use(router).mount("#app");
