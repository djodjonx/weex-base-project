import Vue from 'vue'
import VueRouter from 'vue-router'
import Hello from '@/components/Application/Hello'
import Second from '@/components/Application/Second'

Vue.use(VueRouter)
// Your's route here
export default new VueRouter ({
    routes: [{
        path: '/',
        redirect: '/hello'
    },
    {
        path: '/hello',
        component: Hello,
        name: 'page1'
    },
    {
        path: '/second',
        component: Second,
        name: 'page2'
    }]
})
