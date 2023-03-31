<script setup lang="ts">
import { ref,watch,onMounted} from 'vue'
import servicePosts from '../composables/servicePosts';
import serviceUser from '../composables/serviceUser';
import serviceComments from '../composables/ServiceComments';
const props=defineProps<{ id: string }>()
    let idpost=ref(props.id)
    let listItem:any = ref({})
    onMounted(async () => {
      let {getOnlyPost} =await servicePosts(idpost.value)
      const {OnlyUser} = await serviceUser(getOnlyPost.userId)
      const {getComments} = await serviceComments(idpost.value)
      getOnlyPost["user"]=OnlyUser.name
      getOnlyPost["commets"]=getComments
      listItem.value=getOnlyPost
    });

</script>

<template>
  <div
    v-if="listItem.id"
  >
    <table
      class="table  table-bordered">
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
              :key="comments.id">
              {{ comments.body }}
            </p>
          </td>
        </tr>
      </tbody>
    </table>
    <a href="#/">Regresar</a>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}


</style>
