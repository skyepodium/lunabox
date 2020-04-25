import Vue from 'vue'
import VueRouter from 'vue-router'

import LayoutIndex from '@/layouts/index.vue'
import Base from '@/views/Base/index.vue'
import CreateIndex from '@/views/Create/index.vue'
Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: LayoutIndex,
            name: 'LayoutIndex',
            children: [
                {
                path: '',
                component: Base,
                name: 'Base',
                },
                {
                    path: '/create',
                    component: CreateIndex,
                    name: 'CreateIndex'
                }                  
            ]            
        }
    ]
})