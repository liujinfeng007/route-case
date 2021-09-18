import Vue from "vue";
import VueRouter from 'vue-router'
import Home from "@/pages/Home";
import About from "@/pages/About";
import News from "@/pages/News";
import Message from "@/pages/Message";
import Detail from "@/pages/Detail";

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/home',
            component: Home,
            meta: {
                title: '主页',
                isAuth: false
            },
            children: [
                {
                    name: 'xinwen',
                    path: 'news',
                    component: News,
                    meta: {
                        title: '新闻',
                        isAuth: true
                    },
                    beforeEnter(to, from, next) {
                        if (to.meta.isAuth) {
                            if (localStorage.getItem('name') === 'liu') {
                                next()
                            } else {
                                alert('权限不对')
                            }
                        } else {
                            next()
                        }
                    }
                },
                {
                    name: 'xiaoxi',

                    path: 'msg',
                    component: Message,
                    meta: {
                        title: '消息',
                        isAuth: true
                    },

                    children: [
                        {
                            name: 'detail',
                            // path:'detail',
                            path: 'detail/:id/:title',
                            component: Detail,
                            props: true,
                            meta: {
                                isAuth: true,
                                title: '详情页'
                            }
                            /* props($route){
                                 return{
                                     id:$route.query.id,
                                     title:$route.query.title
                                 }
                             }*/
                        }
                    ]
                }
            ]
        },
        {
            path: '/about',
            component: About,
            meta: {
                isAuth: false
            },
        }
    ]
})
/*router.beforeEach((to, from, next) => {
    if (to.meta.isAuth) {
        if (localStorage.getItem('name') === 'liu') {
            next()
        } else {
            alert('权限不对')
        }
    } else {
        next()
    }
})*/
router.afterEach((to, from) => {
    console.log(to, from)
    document.title = to.meta.title || 'liu'
})
export default router