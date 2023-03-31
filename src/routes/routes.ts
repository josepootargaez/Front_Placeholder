import {createRouter,createWebHashHistory} from 'vue-router'
import PostItemVue from './../components/PostItem.vue';
import UserDetails from './../components/UserDetails.vue';
import PostList from './../components/PostList.vue';
const routes = [
    { path: '/', component: PostList },
    { path: '/post-item/:id', component: PostItemVue,props:true },
    { path: '/detail-user/:id', component: UserDetails,props:true },
    // { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ]
  const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })

  export default router