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
  name: "MasterViewDetailsCompositionHostel",
  extends: MasterViewDetailsComposition,
  components: {MasterViewDetailsCompositionDefaultContent, MasterViewDetailsCompositionHeader},
}
</script>