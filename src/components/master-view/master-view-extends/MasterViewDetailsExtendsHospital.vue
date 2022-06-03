<template>
  <div class="details">
    <div class="details-header">
      <h4>Details</h4>
      <button @click.prevent="toggleCollapse">{{ collapseBtnLabel }}</button>
    </div>
    <div class="details-content" :class="{'collapsed': collapsed}">
      <table>
        <thead>
        <tr>
          <th>Nom</th>
          <th>Service</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="building in item.buildings">
          <td>{{ building.name }}</td>
          <td>{{ building.service }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import MasterViewDetailsExtendsBase from "@/components/master-view/master-view-extends/MasterViewDetailsExtendsBase";

export default {
  name: "MasterViewDetailsExtendsHospital",
  extends: MasterViewDetailsExtendsBase,
}
</script>