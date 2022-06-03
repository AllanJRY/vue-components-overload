<template>
  <div v-if="null === item" class="master-view nothing-selected">
    <h2>Aucune sélection.</h2>
  </div>
  <div v-else class="master-view">
    <div class="master-view-header">
      <h2>{{ item.type }}: {{ item.name }}</h2>
      <div class="actions">
        <button>Supprimer</button>
        <button>Suivant</button>
      </div>
    </div>
    <div class="master-view-body">

<!--      Props driven -->
      <MasterViewDetailsPropsDriven :item="item" />
      <MasterViewDetailsPropsDriven :type="item.type" :item="item" />
<!--      end props driven-->

<!--      Mixins -->
<!--      <MasterViewDetailsMixinBase :item="item" />-->
<!--      <MasterViewDetailsMixinGarage v-if="'Garage' === item.type" :item="item" />-->
<!--      <MasterViewDetailsMixinHostel v-else-if="'Hotel' === item.type" :item="item" />-->
<!--      <MasterViewDetailsMixinHospital v-else-if="'Hopital' === item.type" :item="item" />-->
<!--      End mixins -->

<!--      Slots -->
<!--      <MasterViewDetailsSlot>
        <template #content>
          <table>
            <tr>
              <th>Nom</th>
              <td>{{ item.name }}</td>
            </tr>
            <tr>
              <th>Date de création</th>
              <td>{{ item.createdAt }}</td>
            </tr>
          </table>
        </template>
      </MasterViewDetailsSlot>
      <MasterViewDetailsSlot>
        <template #content>
          <table v-if="'Garage' === item.type">
            <thead>
            <tr>
              <th>Place</th>
              <th>Quantité</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="placeType in item.type">
              <td>{{ placeType.type }}</td>
              <td>{{ placeType.quantity }}</td>
            </tr>
            </tbody>
          </table>

          <table v-else-if="'Hotel' === item.type">
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

          <table v-else-if="'Hopital' === item.type">
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
      </MasterViewDetailsSlot>-->
<!--      End slots -->

<!--  Extends -->
<!--      <MasterViewDetailsExtendsBase :item="item" />-->
<!--      <MasterViewDetailsExtendsGarage v-if="'Garage' === item.type" :item="item" />-->
<!--      <MasterViewDetailsExtendsHostel v-else-if="'Hotel' === item.type" :item="item" />-->
<!--      <MasterViewDetailsExtendsHospital v-else-if="'Hopital' === item.type" :item="item" />-->
<!--  End extends -->

<!--      Composition-->
<!--      <MasterViewDetailsComposition :item="item" />-->
<!--      <MasterViewDetailsCompositionGarage :item="item" v-if="'Garage' === item.type" />-->
<!--      <MasterViewDetailsCompositionHostel :item="item" v-else-if="'Hotel' === item.type" />-->
<!--      <MasterViewDetailsCompositionHospital :item="item" v-else-if="'Hopital' === item.type" />-->
<!--      End composition-->

    </div>
  </div>
</template>

<script>
import MasterViewDetailsPropsDriven
  from "@/components/master-view/master-view-props-driven/MasterViewDetailsPropsDriven";
import MasterViewDetailsSlot from "@/components/master-view/master-view-slots/MasterViewDetailsSlot";
import MasterViewDetailsExtendsBase from "@/components/master-view/master-view-extends/MasterViewDetailsExtendsBase";
import MasterViewDetailsExtendsGarage
  from "@/components/master-view/master-view-extends/MasterViewDetailsExtendsGarage";
import MasterViewDetailsExtendsHostel
  from "@/components/master-view/master-view-extends/MasterViewDetailsExtendsHostel";
import MasterViewDetailsExtendsHospital
  from "@/components/master-view/master-view-extends/MasterViewDetailsExtendsHospital";
import MasterViewDetailsMixinBase from "@/components/master-view/master-view-mixins/MasterViewDetailsMixinBase";
import MasterViewDetailsMixinGarage from "@/components/master-view/master-view-mixins/MasterViewDetailsMixinGarage";
import MasterViewDetailsMixinHostel from "@/components/master-view/master-view-mixins/MasterViewDetailsMixinHostel";
import MasterViewDetailsMixinHospital from "@/components/master-view/master-view-mixins/MasterViewDetailsMixinHospital";
import MasterViewDetailsComposition
  from "@/components/master-view/master-view-composition/MasterViewDetailsComposition";
import MasterViewDetailsCompositionGarage
  from "@/components/master-view/master-view-composition/MasterViewDetailsCompositionGarage";
import MasterViewDetailsCompositionHostel
  from "@/components/master-view/master-view-composition/MasterViewDetailsCompositionHostel";
import MasterViewDetailsCompositionHospital
  from "@/components/master-view/master-view-composition/MasterViewDetailsCompositionHospital";
export default {
  name: "MasterView",
  components: {
    MasterViewDetailsCompositionHospital,
    MasterViewDetailsCompositionHostel,
    MasterViewDetailsCompositionGarage,
    MasterViewDetailsComposition,
    MasterViewDetailsMixinHospital,
    MasterViewDetailsMixinHostel,
    MasterViewDetailsMixinGarage,
    MasterViewDetailsMixinBase,
    MasterViewDetailsExtendsHospital,
    MasterViewDetailsExtendsHostel,
    MasterViewDetailsExtendsGarage,
    MasterViewDetailsExtendsBase, MasterViewDetailsSlot, MasterViewDetailsPropsDriven},
  props: {
    item: {
      type: Object,
      default: null,
    },
  },
}
</script>

<style lang="scss" scoped>
.master-view {
  width: 100%;
  height: 100%;
  border-radius: 7px;

  background-color: var(--tertiary-color);
  overflow: hidden;
  .master-view-header {
    background-color: var(--primary-color);
    color: var(--quaternary-color);
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .actions {
      button {
        margin-left: 0.5rem;
      }
    }
  }

  .master-view-body {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>