import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from './src/views/Home.vue';
import Login from './src/views/Login.vue';

Vue.use(VueRouter);

export default new VueRouter({
    mode:'history',
    routes:[
        {
            path:'/',
            name:'Home',
            component: Home,
        },
        {
            path:'/login',
            name:'login',
            component: Login,

        },
       
            
    ],
})