import Vue from 'vue';
import PageIndex from './pages/index.vue';

var app = new Vue({
    el: '#app',
    components: {
        'PageIndex': PageIndex,
    }
});
