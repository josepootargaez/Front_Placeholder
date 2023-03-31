<script setup lang="ts">
import { onMounted,computed, ref, reactive, watch, watchEffect } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import api from './composables/api';
let listPost:any=ref();
let  listUsers:any=ref();
let  list:any=ref([]);
  onMounted(async () => {
      const {getPosts,getUsers} =await api()
      listUsers.value=getUsers
      listPost.value=getPosts
    });
watch(listPost,()=>{
        listPost.value.map((post:any)=>{
      return listUsers.value.map((user:any)=>{
        if(post.userId==user.id){
          list.value.push({"title":post.title,"name":user.name})
        }
      })
    })
    return list;
})
</script>

<template>
  <table class="table  table-bordered">
    <thead class="table-dark">
      <tr>
        <th>#</th>
        <th>Titulo</th>
        <th>Autor</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="item,index in list"
        :key="item.name"
      >
        <td>
          <p :class="`${index}`">
            {{ index+1 }}
          </p>
        </td>
        <td>
          <p class="">
            {{ item.title }}
          </p>
        </td>
        <td><p>{{ item.name }}</p></td>
      </tr>
    </tbody>
  </table>
  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
tbody{
max-height: 10vh;
overflow: auto;
}
</style>
