<script setup lang="ts">
import { ref,watch,onMounted} from 'vue'
import serviceUser from '../composables/serviceUser';

const props=defineProps<{ id: string }>()
    let idUser=ref(props.id)
    let listItem:any = ref({})
    onMounted(async () => {
      const {OnlyUser} = await serviceUser(idUser.value)
      listItem.value=OnlyUser
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
