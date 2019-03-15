import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'

import Home from './components/Home'
import Settings from './components/Settings'
import About from './components/About.vue'
import User from './components/User.vue'
import Profile from './components/Profile.vue'
import Posts from './components/Posts.vue'




//imort HOme mogli smo i neko drugo ime jer je default export, ali smo nazvali HOme
//moze i bez .vue


Vue.use(VueRouter)
Vue.config.productionTip = false

const routes = [
  {path:'/',component: Home},
  {path:'/about',component: About},
  {path:'/settings/:id',component: Settings},
  {
    path:'/user/:id',
    component:User,
    redirect:'/user/:id/profile',
    // kada se nadjemo na user: id ruti, hocemo da se odmah rekirektujrmo na posts
    children:[
      {path: 'profile',component:Profile},
      {path: 'posts',component:Posts},
      
    ]
  
  }

]

const router = new VueRouter({
  routes: routes,
  mode:'history'
  //ovo histori nam treba da u url nema tarabe
  // mogli smo samo routes jer se isto zovu
})
// routes:   mora se ovako zvati

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
