import { createApp } from 'vue'
import App from './App.vue'
// import Vue from 'vue'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
dom.watch();

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);

// add necessary dependencies...

app.mount("#app");

/* eslint-disable no-new */
// new Vue({
//     el: '#app',
//     components: { App },
//     template: '<App/>'
// })
