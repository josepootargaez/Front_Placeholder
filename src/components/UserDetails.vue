<script setup lang="ts">
import { ref,watch,onMounted} from 'vue'
import serviceUser from '../composables/serviceUser';
import { useRoute } from "vue-router";
const route = useRoute();
const props=defineProps<{ id: string }>()
    let idUser=ref(props.id)
    let listItem:any = ref({})
   async function getList(){
      const {OnlyUser} = await serviceUser(idUser.value)
      listItem.value=OnlyUser
    }
    onMounted(async () => {
    await getList()
    });
    watch(
      () => route.fullPath,
      async () => {
        idUser.value=route.params.id.toString()
        getList();
      }
    );
</script>

<template>
  <div
    v-if="listItem.id"
    class="container"
  >
    <div class="tableContainer">
      <h1 class="text-center mt-4">
        Detalle de Usuario : {{ listItem.name }}
      </h1>
      <table
        class="table  table-bordered"
      >
        <thead class="table-dark">
          <tr>
            <th scope="2">
              #
            </th>
            <th scope="col">
              Nombre
            </th>
            <th scope="col">
              correo
            </th>
            <th scope="col">
              Direccion
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
                {{ listItem.name }}
              </p>
            </td>
            <td col="">
              <p class="">
                {{ listItem.email }}
              </p>
            </td>
            <td col="">
              <p>
                {{ listItem.address.street }}
                -{{ listItem.address.suite }}
                -{{ listItem.address.city }}
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
.read-the-docs {
  color: #888;
}

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
