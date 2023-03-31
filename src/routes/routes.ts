import {createRouter,createWebHashHistory} from 'vue-router'
import PostItemVue from './../components/PostItem.vue';
import UserDetails from './../components/UserDetails.vue';
import PostList from './../components/PostList.vue';
const routes = [
    { path: '/', component: PostList },
    { path: '/post-item/:id', component: PostItemVue,props:true, beforeEnter: (to:any, from:any) => {
        // reject the navigation
        if(to.params.id & parseInt(to.params.id)){
            return true
        }
        return false
      }},
    { path: '/detail-user/:id', component: UserDetails,props:true, beforeEnter: (to:any, from:any) => {
        // reject the navigation
        if(to.params.id & parseInt(to.params.id)){
            return true
        }
        return false
      } },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: PostList },
  ]
  const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
  })

  export default router