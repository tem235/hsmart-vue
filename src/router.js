import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
    mode: "history",

    routes:[
        {
            path:"/",
            name: "home",
            component: require("@/pages/Home.vue").default
        },
        {
            path:"/rooms",
            name: "rooms",
            component: () => import("@/pages/Rooms.vue")
        },
        {
            path:"/billing",
            name: "billing",
            component: () => import("@/pages/Billing.vue")
        },
        {
            path:"/members",
            name: "members",
            component: () => import("@/pages/Members.vue")
        },
        {
            path:"/statistics",
            name: "statistics",
            component: () => import("@/pages/Statistics.vue")
        },
    ]
})