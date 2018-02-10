import Vue from 'vue'
import Vuex from 'vuex'
import router from '@/router'
import store from '@/store'
import weex from 'weex-vue-render'
import AxCheckBox from '@/components/_commons/AxCheckBox'

Vue.use(Vuex)
// Router and store in new Vue() are generate in webpack

// Declare your's global components here
Vue.component('ax-checkbox', AxCheckBox)

// import render-core.
// import weex from 'weex-vue-render/dist/index.core';

// need to run `npm i weex-vue-slider weex-vue-stream --save` frist.
// import the plugins (components and modules) you want to use.
// import slider from 'weex-vue-slider';
// import stream from 'weex-vue-stream';

// install the plugins.
// weex.install(slider);
// weex.install(stream);

weex.init(Vue)

const App = require('../../../src/components/Application/Hello.vue');
App.el = '#root';
App.router = router
App.store = new Vuex.Store(store)
new Vue(App);
