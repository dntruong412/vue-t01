import Vue from 'vue';
import Vuex from 'vuex';
import VueRouter from 'vue-router'

import Navbar from './components/navbar.vue';
import PageIndex from './pages/index.vue';
import PagePost from './pages/post.vue';
import PagePostItem from './pages/post-item.vue';

Vue.use(VueRouter);
Vue.use(Vuex);

const EventBus = new Vue();
Object.defineProperties(Vue.prototype, {
    $bus: {
        get: function() {
            return EventBus
        }
    }
});

const routes = [
    { name: 'home', path: '/', component: PageIndex },
    { name: 'post.list', path: '/posts', component: PagePost },
    { name: 'post.item', path: '/post/:id', component: PagePostItem }
];

const router = new VueRouter({
    routes: routes,
    linkActiveClass: 'active'
});

new Vue({
    router: router,
    components: {
        navbar: Navbar
    }
}).$mount('#app');

const store = new Vuex.Store({
    state: {
        count: 0
    },
    mutations: {
        increment(state, num) {
            state.count+=num;
        }
    }
});
store.commit('increment', 1);
store.commit('increment', 2);
store.commit('increment', 3);

console.log(store.state.count) // -> 1
