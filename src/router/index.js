import Vue from 'vue'
import VueRouter from 'vue-router'
import Router from 'vue-router'

Vue.use(Router)

var router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'Tree',
            component: ()=>import("@/views/tree")
        }
    ]
})

export default router