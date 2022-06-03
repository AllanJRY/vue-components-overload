<template>
  <div class="details">
    <MasterViewDetailsCompositionHeader title="Détails">
      <template #actions>
        <button @click.prevent="toggleCollapse">{{ collapseBtnLabel }}</button>
      </template>
    </MasterViewDetailsCompositionHeader>
    <MasterViewDetailsCompositionDefaultContent :collapsed="collapsed">
      <template #content>
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
      </template>
    </MasterViewDetailsCompositionDefaultContent>
  </div>
</template>

<script>
import MasterViewDetailsCompositionHeader
  from "@/components/master-view/master-view-composition/MasterViewDetailsCompositionHeader";
import MasterViewDetailsCompositionDefaultContent
  from "@/components/master-view/master-view-composition/MasterViewDetailsCompositionDefaultContent";
import MasterViewDetailsComposition
  from "@/components/master-view/master-view-composition/MasterViewDetailsComposition";
export default {
  name: "MasterViewDetailsCompositionGarage",
  extends: MasterViewDetailsComposition,
  components: {MasterViewDetailsCompositionDefaultContent, MasterViewDetailsCompositionHeader},
}
</script>