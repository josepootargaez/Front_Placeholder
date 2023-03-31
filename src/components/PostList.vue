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
  <div
    v-if="list.length>0"
    class="container "
  > 
    <h1 class="text-center">
      Lista de Posts
    </h1>
    <div class="tableContainer">
      <table
        class="table  table-bordered"
      >
        <thead class="table-dark">
          <tr>
            <th scope="col">
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
            <td col="2">
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
    </div>
  </div>
</template>

<style scoped>
.tableContainer {
    height: 300px;
    overflow: auto;
}
.table {
    position: sticky;
    top: 0;
    width: 100%;
}
</style>
