import Vue from 'vue';
import Sd from '@skydragon/base';
import VueResource from 'vue-resource';
import App from './app.vue';
import ComConfig from './config.js';

// 主题样式
import 'components/common/common.styl';

Vue.config.devtools = true;

// Resource
Vue.use(VueResource);

// SkyDragon
Sd.injection(Vue, ComConfig);

Vue.use(Sd);

// 配置 resource
Vue.http.options.root = '';
Vue.http.options.emulateJSON = true;

new Vue(App).$mount('#app');