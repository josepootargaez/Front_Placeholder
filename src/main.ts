import { createApp } from 'vue'
import './style.css'
import PostList from './components/PostList.vue';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import PostItemVue from './components/PostItem.vue';
import App from './App.vue'
// import PostList from '../PostList.vue';
import {createRouter,createWebHashHistory} from 'vue-router'
const routes = [
    { path: '/', component: PostList },
    { path: '/post-item/:id', component: PostItemVue,props:true },
    // { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ]
  const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })
createApp(App).use(router).mount('#app')
