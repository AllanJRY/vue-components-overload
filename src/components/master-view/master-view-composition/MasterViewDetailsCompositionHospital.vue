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
  name: "MasterViewDetailsCompositionHospital",
  extends: MasterViewDetailsComposition,
  components: {MasterViewDetailsCompositionDefaultContent, MasterViewDetailsCompositionHeader},
}
</script>