import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "login",
        component: (resolve) => require(["views/login"], resolve),
        icon: '',
        meta: {
            title: "登录",
        }
    },
    {
        path: "/home",
        name: "home",
        component: (resolve) => require(["views/home"], resolve),
        icon: '',
        meta: {
            title: "首页",
        },
        children: [
            {
                path: "/info",
                name: "info",
                component: (resolve) => require(["views/info"], resolve),
                icon: '',
                meta: {
                    title: "首页",
                },
            },
            {
                path: "/vip",
                name: "vip",
                component: (resolve) => require(["views/vip"], resolve),
                icon: '',
                meta: {
                    title: "首页",
                },
            },
            {
                path: "/my",
                name: "my",
                component: (resolve) => require(["views/my"], resolve),
                icon: '',
                meta: {
                    title: "我的",
                },
            },
            {
                path: "/shopping-car",
                name: "shopping-car",
                component: (resolve) => require(["views/shopping-car"], resolve),
                icon: '',
                meta: {
                    title: "购物车",
                },
            },
        ]
    },
    {
        path: "/detail",
        name: "detail",
        component: (resolve) => require(["views/detail"], resolve),
        icon: '',
        meta: {
            title: "详情",
        },
    },
    {
        path: "/address",
        name: "address",
        component: (resolve) => require(["views/address"], resolve),
        icon: '',
        meta: {
            title: "地址",
        },
    },
    {
        path: "/edit-address",
        name: "edit-address",
        component: (resolve) => require(["views/edit-address"], resolve),
        icon: '',
        meta: {
            title: "编辑地址的",
        },
    }
];
document.title = '龙氏集团';
const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;