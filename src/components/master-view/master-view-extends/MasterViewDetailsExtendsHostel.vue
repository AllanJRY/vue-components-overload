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
          <th>Taille</th>
          <th>Nombre de lits</th>
          <th>Tv incluse</th>
          <th>Douche incluse</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="bedroom in item.bedrooms">
          <td>{{ bedroom.size }}</td>
          <td>{{ bedroom.nbBeds }}</td>
          <td>{{ bedroom.tv ? 'oui': 'non' }}</td>
          <td>{{ bedroom.shower  ? 'oui': 'non' }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import MasterViewDetailsExtendsBase from "@/components/master-view/master-view-extends/MasterViewDetailsExtendsBase";

export default {
  name: "MasterViewDetailsExtendsHostel",
  extends: MasterViewDetailsExtendsBase,
}
</script>