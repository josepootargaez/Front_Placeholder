<script setup lang="ts">
import { onMounted,computed, ref, reactive, watch, watchEffect } from 'vue';
import servicePosts from '../composables/servicePosts';
import serviceUser from '../composables/serviceUser';
let listPost:any=ref();
let  listUsers:any=ref();
let  list:any=ref([]);
  onMounted(async () => {
      const {getPosts} =await servicePosts()
      const {getUsers} =await serviceUser()
      listUsers.value=getUsers
      listPost.value=getPosts
    });
watch(listPost,()=>{
        listPost.value.map((post:any)=>{
      return listUsers.value.map((user:any)=>{
        if(post.userId==user.id){
          list.value.push({"title":post.title,"name":user.name,"idpost":post.id})
        }
      })
    })
    return list;
})
const vLength = {
      beforeMount: (el:any,val:any) => {
        list.value.map((res:any,index:any)=>{
          list.value[index].title=list.value[index].title.substring(0,val.value)
        })
      }
}
</script>

<template>
  <table
    v-if="list.length>0"
    class="table  table-bordered"
  >
    <thead class="table-dark">
      <tr>
        <th scope="2">
          #
        </th>
        <th scope="col">
          Titulo
        </th>
        <th scope="col">
          Autor
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
      
        v-for="item,index in list"
        :key="item.name"
      >
        <td colspan="2">
          <div :class="`${index}`">
            <p>
              {{ index+1 }}
            </p>
          </div>
        </td>
        <td col="2">
          <a :href="'#/post-item/'+item.idpost">
            <p v-length="50">
              {{ item.title }}
            </p>
          </a>
        </td>
        <td col="1">
          <p>{{ item.name }}</p>
        </td>
      </tr>
    </tbody>
  </table>
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
height: 200px;
overflow: auto;
display: block;
}
thead{
  width: 100%;
  display: table;
}
table
{
  display: block;
}
</style>
