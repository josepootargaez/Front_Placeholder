<script setup lang="ts">
import { ref, watch, onMounted, computed } from 'vue';
import servicePosts from '../composables/servicePosts';
import serviceUser from '../composables/serviceUser';
import serviceComments from '../composables/ServiceComments';
import { useRoute } from "vue-router";
const route = useRoute();
const props=defineProps<{ id: string }>()
    let idpost=ref(props.id)
    let listItem:any = ref({})
    async function getList(){
      let {getOnlyPost} =await servicePosts(idpost.value)
      const {OnlyUser} = await serviceUser(getOnlyPost.userId)
      const {getComments} = await serviceComments(idpost.value)
      getOnlyPost["user"]=OnlyUser.name
      getOnlyPost["commets"]=getComments
      return listItem.value=getOnlyPost
    }
    onMounted(async () => {
      await getList();
    });
    watch(
      () => route.fullPath,
      async () => {
        idpost.value=route.params.id.toString()
        getList();
      }
    );
    

</script>

<template>
  <div
    v-if="listItem.id"
    class=" container mt-4"
  >
    <h1 :class="'text-center'">
      Post #{{ idpost }}
    </h1>
    <div class="tableContainer">
      <table
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
            <th scope="col">
              Contenido
            </th>
            <th scope="col">
              Comentarios
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colspan="">
              <div :class="`${listItem.id}`">
                <p>
                  {{ listItem.id }}
                </p>
              </div>
            </td>
            <td col="">
              <p class="">
                {{ listItem.title }}
              </p>
            </td>
            <td col="">
              <a :href="'#/detail-user/'+listItem.userId">
                <p class="">
                  {{ listItem.user }}
                </p>
              </a>
            </td>
            <td col="">
              <p>{{ listItem.body }}</p>
            </td>
            <td col="">
              <p 
                v-for="comments in listItem.commets"
                :key="comments.id"
              >
                {{ comments.body }}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <a href="#/">Regresar</a>
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
