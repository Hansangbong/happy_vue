//Entry Point (시작점)
import { createApp } from 'vue';
import App from './App.vue';
//import App from './App4.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import Modal from 'vue-bs-modal';
import mitt from 'mitt';


//local css 적용
import './assets/css/admin/reset.css';
import './assets/css/admin/basic.css';
import './assets/css/admin/common.css';
import './assets/css/admin/layout.css';
//bootstrap lib css적용
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


let emitter = mitt();


// 실제 데이터를 json으로 주고받기 위해 무언가 요청할 때 사용할 수 있도록 설정
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const app = createApp(App);
app.use(store).use(router).use(Modal, { dynamic: true }).mount('#app');

// app에 통신할 때 axios 쓸 거야 선언
app.config.globalProperties.axios = axios;
app.config.globalProperties.emiiter = emitter;
app.config.productionTip = false;
