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
          <th>Place</th>
          <th>Quantité</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="placeType in item.places">
          <td>{{ placeType.type }}</td>
          <td>{{ placeType.quantity }}</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import MasterViewDetailsExtendsBase from "@/components/master-view/master-view-extends/MasterViewDetailsExtendsBase";

export default {
  name: "MasterViewDetailsExtendsGarage",
  extends: MasterViewDetailsExtendsBase,
}
</script>